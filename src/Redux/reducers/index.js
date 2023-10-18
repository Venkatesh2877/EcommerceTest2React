import {
  ADD_CART,
  ADD_PRODUCTS,
  CREATE_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_CART,
  SET_DISPLAY,
  SET_SORT,
  SET_EDIT,
} from "../actions";

const initialState = {
  list: [],
  cart: [],
  page: "All",
  sorted: false,
};

export function productsReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        list: [action.product, ...state.list],
      };

    case REMOVE_PRODUCT:
      const filtertedList = state.list.filter(
        (product) => product.ProductName !== action.product.ProductName
      );
      const filtertedcart = state.cart.filter(
        (product) => product.ProductName !== action.product.ProductName
      );
      return {
        ...state,
        list: filtertedList,
        cart: filtertedcart,
      };

    case ADD_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

    case REMOVE_CART:
      const filtertedCart = state.cart.filter(
        (product) => product.ProductName !== action.product.ProductName
      );
      return {
        ...state,
        cart: filtertedCart,
      };

    case SET_DISPLAY:
      return {
        ...state,
        page: action.value,
      };

    case SET_SORT:
      return {
        ...state,
        sorted: action.value,
      };

    case SET_EDIT:
      return {
        ...state,
        editMode: action.value,
      };

    default:
      return state;
  }
}
