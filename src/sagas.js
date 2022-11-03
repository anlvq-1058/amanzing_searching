import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './redux/actions';

function usersFetch() {
  const url = 'http://localhost:3000/products?'
  return fetch(url).then(res => res.json())
}

function* watchFetchProducts() {
  const products = yield call(usersFetch);
  yield put({type: GET_USERS_SUCCESS, products});
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, watchFetchProducts);
}

export default mySaga;