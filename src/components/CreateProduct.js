import React from "react";
import { useState } from "react";
import { store } from "../Redux/store";
import { createProducts, setDisplay } from "../Redux/actions";

export default function CreateProduct() {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Rating, setRating] = useState("");
  const [Image, setImage] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      ProductName,
      Price,
      Rating,
      Image,
      Description,
    };
    store.dispatch(createProducts(newProduct));
    alert("Added a new Product");
    store.dispatch(setDisplay("All"));
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          Enter the Product Name:
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          Enter the price of product:
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          Enter the rating of product:
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          Enter the URL of Product Image:
          <div>
            <input
              type="url"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          Enter the Description of Product:
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
