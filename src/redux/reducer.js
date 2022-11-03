const initState = {
  filters: {
    search: '',
    category: [],
    price: [],
    type: [],
    page: [],
    sort: 'asc'
  },
  products: []
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'filters/searchByName':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload
        }
      }
    case 'products/productList':
      return {
        ...state,
        products: [
          ...state.products,
          action.payload
        ]
      }

    default: 
      return state;
  }
}

export default rootReducer
