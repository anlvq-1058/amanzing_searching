export const GET_USERS_FETCH = 'products/productList';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const filterByName = (data) => {
  return {
    type: 'filters/searchByName',
    payload: data.filter.search
  }
}

export const showProductList = (data) => {
  return {
    type: GET_USERS_FETCH
  }
}
