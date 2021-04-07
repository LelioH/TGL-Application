import { combineReducers } from 'redux'
import auth from './auth'
import types from './types'

const rootReducer = combineReducers({
    auth,
    types
})

export default rootReducer
