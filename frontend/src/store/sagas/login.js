import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Types as authTypes, Creators as authActions } from "../reducers/auth";
import api from "../../services/api";

function* login({ payload }) {
    const MySwal = withReactContent(Swal);

    try {
        const response = yield call(api.post, "/sessions", payload);

        yield put(
            authActions.LOG_IN_SUCCESS({
                token: response.data.token.token,
            })
        );

        const verifyToken = (api.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${response.data.token.token}`);

        console.log(`Verificar ${verifyToken}`);

        MySwal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
        });
    } catch (error) {
        MySwal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: `${error.response.data.error.message}`,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
        });
    }
}

export default function* rootSaga() {
    yield takeLatest(authTypes.LOG_IN, login);
}
