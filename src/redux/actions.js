import * as constant from './constant';
export const filterByName = (data) => {
  return {
    type: 'filters/searchByName',
    payload: data.filter.search
  }
}

export const fetchProducts = () => {
  return {
    type: constant.FETCH_PRODUCT
  }
}

export const fetchProductsSuccess = (payload) => {
  return {
    type: constant.FETCH_PRODUCT_SUCCESS,
    payload,
  }
}

export const fetchProductsError = (payload) => {
  return {
    type: constant.FETCH_PRODUCT_ERROR,
    payload,
  }
}
