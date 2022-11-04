import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProducts } from './redux/actions';
import * as constant from './redux/constant';

function usersFetch() {
  
  const url = 'http://localhost:3000/products?'
  return fetch(url).then(res => res.json())
}

function* watchFetchProducts() {
  const products = yield call(usersFetch);
  yield put(fetchProductsSuccess(products));
}

function* mySaga() {
  yield takeEvery(constant.FETCH_PRODUCT, watchFetchProducts);
}

export default mySaga;
