import { FETCH_PRODUCT, FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS } from './constant';
const initState = {
  filters: {
    search: '',
    category: [],
    price: [],
    type: [],
    page: [],
    sort: 'asc'
  },
  products: [],
  loading: false
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
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }

    default: 
      return {
        ...state
      };
  }
}

export default rootReducer
