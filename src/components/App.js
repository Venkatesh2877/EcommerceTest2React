import CreateProduct from "./CreateProduct";
import Navbar from "./Navbar";
import Products from "./Products";
import { store } from "../Redux/store";
import { useEffect, useState } from "react";
import { addProducts, setSort } from "../Redux/actions";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function productAPI() {
      const response = await fetch(
        "https://my-json-server.typicode.com/Venkatesh2877/EcommerceTest2/db"
      );
      const jsonData = await response.json();
      store.dispatch(addProducts(jsonData.products));
      setLoading(false);
    }

    productAPI();
  }, []);

  const page = useSelector((state) => state.page);
  const list = useSelector((state) => state.list);
  const cart = useSelector((state) => state.cart);
  const sorted = useSelector((state) => state.sorted);

  let displayList = [];
  if (page === "All") {
    displayList = list.slice();
  } else if (page === "Cart") {
    displayList = cart.slice();
  }

  const sortByPrice = () => {
    store.dispatch(setSort(!sorted));
  };

  if (sorted) {
    displayList.sort((a, b) => a.Price - b.Price);
  }

  const productInCart = (list) => {
    const i = cart.indexOf(list);
    if (i === -1) {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <Navbar page={page} />
      {page !== "Create" ? (
        <div className="sort-container" onClick={sortByPrice}>
          <div
            className="sort"
            style={{ backgroundColor: sorted ? "#f5f5f5" : "" }}
          >
            Sort by price
          </div>
          {sorted ? <div className="cross">X</div> : null}
        </div>
      ) : null}

      {loading === true ? (
        <h1>Loading</h1>
      ) : page !== "Create" ? (
        displayList.map((list, index) => (
          <Products list={list} key={index} inCart={productInCart(list)} />
        ))
      ) : (
        <CreateProduct />
      )}
    </div>
  );
}

export default App;
