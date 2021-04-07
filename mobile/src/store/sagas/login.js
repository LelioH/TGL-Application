import { call, put, takeLatest } from 'redux-saga/effects';

import { Types as authTypes, Creators as authActions } from '../reducers/auth';
import api from '../../services/api';

function* login({ payload }) {

  try {
    const response = yield call(api.post, '/sessions', payload);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token.token}`;

    yield put(
      authActions.LOG_IN_SUCCESS({
        token: response.data.token.token,
      })
    );
  } catch (error) {
    console.log(error);
  }

  
}

export default function* rootSaga() {
  yield takeLatest(authTypes.LOG_IN, login);
}
