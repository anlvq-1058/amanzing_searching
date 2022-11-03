const GET_USERS_FETCH = 'products/productList';

export const filterByName = (data) => {
  return {
    type: 'filters/searchByName',
    payload: data.filter.search
  }
}

export const showProductList = (data) => {
  return {
    type: 'products/productList',
  }
}
