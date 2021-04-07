import React from "react";
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useSelector } from 'react-redux'
import withReactContent from "sweetalert2-react-content";

import api from '../../services/api'
import {
    FormContainer,
    Form,
    InputForm,
    Success,
} from "../../pages/Logon/styles";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Account = () => {
    const selector = useSelector(state => state.auth)
    const token = selector.token
    const MySwal = withReactContent(Swal);

    const updateForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Missing Username'),
            email: Yup.string()
                .email("Invalid e-mail!")
                .required("Missing e-mail!"),
            password: Yup.string()
                .min(6, "Input at least 6 digits!")
                .required("Missing password!"),
        }),

        onSubmit: (async ({ username, email, password }) => {
            try {
                await api.put('/users', {
                    username,
                    email,
                    password,
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                MySwal.fire({
                    position: "center",
                    icon: "success",
                    title: "Informations Changed!",
                    showConfirmButton: false,
                    timer: 3000,
                });
            } catch (err) {
                MySwal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error",
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        })
    });

    console.log()

    return (
        <>
            <Header isBet={true} />
            <FormContainer style={{ marginTop: 75 }}>
                <h1>Account</h1>
                <Form onSubmit={updateForm.handleSubmit}>
                    <InputForm
                        placeholder="Username"
                        id="username"
                        type="username"
                        value={updateForm.values.username}
                        {...updateForm.getFieldProps("username")}
                    />
                    <InputForm
                        placeholder="E-mail"
                        id="email"
                        type="email"
                        value={updateForm.values.email}
                        {...updateForm.getFieldProps("email")}
                    />
                    <InputForm
                        placeholder="Password"
                        id="password"
                        type="password"
                        value={updateForm.values.password}
                        {...updateForm.getFieldProps("password")}
                    />

                    <Success type="submit">
                        Update
                    </Success>
                </Form>
            </FormContainer>
            <Footer />
        </>
    );
};

export default Account;
