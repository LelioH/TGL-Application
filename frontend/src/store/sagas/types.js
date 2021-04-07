import { call, put, takeLatest } from 'redux-saga/effects'

import { Types as typeTypes, Creators as typeActions } from '../reducers/types'
import api from '../../services/api'

function* types() {

    try {
        const response = yield call(api.get, '/types')

        yield put(
            typeActions.GET_TYPES_SUCCESS([...response.data])
        )
    } catch (err) {
        yield put(
            typeActions.GET_TYPES_ERROR(
                err.response ?
                    err.response.data.error.message :
                    'Error'
            )
        )
    }
}

export default function* rootSaga() {
    yield takeLatest(typeTypes.GET_TYPES_REQUEST, types)
}
