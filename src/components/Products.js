import React, { useState } from "react";
import {
  addCart,
  createProducts,
  removeCart,
  removeProduct,
  setDisplay,
} from "../Redux/actions";
import { store } from "../Redux/store";

export default function Products(props) {
  const { list, inCart } = props;
  const [editMode, setEditMode] = useState(false);
  const [ProductName, setProductName] = useState(list.ProductName);
  const [Price, setPrice] = useState(list.Price);
  //const [Image, setImage] = useState[list.Image];
  const [Description, setDescription] = useState(list.Description);

  const handleDeleteFromList = (product) => {
    store.dispatch(removeProduct(product));
    alert("Deleted the Product");
  };
  const handleAddToCart = (product) => {
    store.dispatch(addCart(product));
  };

  const handleRemoveFromCart = (product) => {
    store.dispatch(removeCart(product));
  };

  const handleEdit = (value) => {
    setEditMode(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(removeProduct(list));
    const newProduct = {
      Image: list.Image,
      ProductName,
      Price,
      Description,
    };
    store.dispatch(createProducts(newProduct));
    store.dispatch(setDisplay("All"));
    setEditMode(false);
    alert("Update done");
  };

  return (
    <>
      {!editMode ? (
        <div className="card mb-3" style={{ width: "90%", margin: "auto" }}>
          <div className="row g-0">
            <div
              className="col-md-4"
              style={{ width: "25%", height: "300px", padding: "10px" }}
            >
              <img
                src={list.Image}
                className="img-fluid rounded-start"
                alt="ime"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="col-md-7">
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "70%",
                }}
              >
                <div className="card-title" style={{ width: "30%" }}>
                  <div>{list.ProductName}</div>
                  <div>Rs. {list.Price}</div>
                </div>
                <div className="card-text">{list.Description}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "20px",
                }}
              >
                <i
                  className="fa-solid fa-pencil"
                  style={{ margin: "0px 16px" }}
                  onClick={() => handleEdit(!editMode)}
                ></i>
                <i
                  className="fa-solid fa-trash-can"
                  style={{ margin: "0px 16px" }}
                  onClick={() => handleDeleteFromList(list)}
                ></i>
              </div>
            </div>

            {!inCart ? (
              <div
                className="col-md-2 btn btn-success"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleAddToCart(list)}
              >
                Add to Cart
              </div>
            ) : (
              <div
                className="col-md-2 btn btn-danger"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleRemoveFromCart(list)}
              >
                Remove from Cart
              </div>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="card mb-3" style={{ width: "90%", margin: "auto" }}>
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ width: "25%", height: "300px", padding: "10px" }}
              >
                <img
                  src={list.Image}
                  className="img-fluid rounded-start"
                  alt="ime"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="col-md-7">
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "70%",
                  }}
                >
                  <div className="card-title" style={{ width: "30%" }}>
                    <input
                      type="text"
                      className="form-control"
                      value={ProductName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={Price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  <textarea
                    rows={5}
                    type="text-area"
                    className="form-control"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "20px",
                  }}
                >
                  <button
                    className="btn btn-danger"
                    style={{ margin: "10px 10px" }}
                    onClick={() => handleEdit(!editMode)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ margin: "10px 10px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
