//action
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_DISPLAY = "SET_DISPLAY";
export const SET_SORT = "SET_SORT";
export const SET_EDIT = "SET_EDIT";

//action-creator
export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function createProducts(product) {
  return {
    type: CREATE_PRODUCT,
    product,
  };
}

export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
}

export function addCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}

export function removeCart(product) {
  return {
    type: REMOVE_CART,
    product,
  };
}

export function setDisplay(value) {
  return {
    type: SET_DISPLAY,
    value,
  };
}

export function setSort(value) {
  return {
    type: SET_SORT,
    value,
  };
}

export function setEdit(value) {
  return {
    type: SET_EDIT,
    value,
  };
}
