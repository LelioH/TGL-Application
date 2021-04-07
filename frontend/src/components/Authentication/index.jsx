import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Creators as AuthActions } from "../../store/reducers/auth";

import {
    FormContainer,
    Form,
    InputForm,
    ForgotPassword,
    Success,
    Invalid,
} from "../../pages/Logon/styles";

const Authentication = ({ setPage }) => {

    const dispatch = useDispatch({ type: AuthActions.LOG_IN });

    function handleLogin(email, password) {
        dispatch(AuthActions.LOG_IN({ email, password }));
    }

    const authForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid e-mail!")
                .required("Missing e-mail!"),
            password: Yup.string()
                .min(6, "Input at least 6 digits!")
                .required("Missing password!"),
        }),
        onSubmit: ({ email, password }) => handleLogin(email, password),
    });

    return (
        <>
            <FormContainer>
                <h1>Authentication</h1>
                <Form onSubmit={(event) => {
                    authForm.handleSubmit(event)
                }}>
                    <InputForm
                        placeholder="Email"
                        id="email"
                        type="email"
                        value={authForm.values.email}
                        {...authForm.getFieldProps("email")}
                    />
                    <InputForm
                        placeholder="Password"
                        id="password"
                        type="password"
                        value={authForm.values.password}
                        {...authForm.getFieldProps("password")}
                    />
                    <ForgotPassword onClick={() => setPage("reset")}>
                        I forgot my password
                    </ForgotPassword>
                    <Success type="submit">
                        Log In <FiArrowRight />
                    </Success>
                </Form>
                <Invalid onClick={() => setPage("registration")}>
                    Sign Up <FiArrowRight />
                </Invalid>
            </FormContainer>
        </>
    );
};

export default Authentication;
