import { call, put, takeEvery } from 'redux-saga/effects';

function usersFetch() {
  const url = 'http://localhost:3000/products?'
  fetch(url).then(res => res.json())
}

function* watchFetchProducts() {
  const products = yield call(usersFetch);
  yield put({type: 'products/productList', products});
}

function* mySaga() {
  yield takeEvery('products/productList', watchFetchProducts);
}

export default mySaga;