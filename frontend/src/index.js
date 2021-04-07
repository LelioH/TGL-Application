import "./config/ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

import App from "./App";
import { persistor, store } from "./store";

axios.interceptors.request.use(function (config) {
    const token = store.getState().session.token;
    config.headers.Authorization = token;

    return config;
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
