import { all } from 'redux-saga/effects'

import loginSagas from './login'
import typesSaga from './types'

export default function* rootSaga() {
    return yield all([
        loginSagas(),
        typesSaga()
    ])
}
