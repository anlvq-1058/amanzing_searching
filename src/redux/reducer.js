import { GET_USERS_SUCCESS } from './actions';
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
  console.log({state, action});
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
          ...state.products
        ]
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products
        ]
      }

    default: 
      return state;
  }
}

export default rootReducer
