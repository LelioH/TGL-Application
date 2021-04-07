import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import Reactotron from '../config/ReactotronConfig'
import rootReducer from './reducers'
import sagaReducer from './sagas'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const composer = compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer()
)

let store = createStore(persistedReducer, composer)
let persistor = persistStore(store)

sagaMiddleware.run(sagaReducer)

export { store, persistor }
