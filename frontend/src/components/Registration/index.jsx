import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import api from '../../services/api'
import {
    FormContainer,
    Form,
    InputForm,
    Success,
    Invalid,
} from "../../pages/Logon/styles";

const Registration = ({ setPage }) => {
    const MySwal = withReactContent(Swal);

    const registrationForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Missing Name!"),
            email: Yup.string()
                .email("Invalid e-mail!")
                .required("Missing e-mail!"),
            password: Yup.string()
                .min(6, "Input at least 6 digits!")
                .required("Missing password!"),
        }),


        onSubmit: (async ({ username, email, password }) => {
            try {
                await api.post('/users', {
                    username,
                    email,
                    password
                })
                MySwal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome ${username}`,
                    text: "Check your e-mail for more instructions!",
                    showConfirmButton: false,
                    timer: 3000,
                    willOpen: setPage("auth"),
                });
            } catch (err) {
                console.log(err)
            }
        })

    });


    //useState infos

    return (
        <>
            <FormContainer>
                <h1>Registration</h1>
                <Form onSubmit={(event) => {
                    // console.log(registrationForm.errors);
                    registrationForm.handleSubmit(event)
                }}>
                    <InputForm
                        placeholder="Username"
                        id="username"
                        type="username"
                        {...registrationForm.getFieldProps("username")}
                    />
                    <InputForm
                        placeholder="Email"
                        type="email"
                        id="email"
                        {...registrationForm.getFieldProps("email")}
                    />
                    <InputForm
                        placeholder="Password"
                        type="password"
                        id="password"
                        {...registrationForm.getFieldProps("password")}
                    />
                    <Success type="submit">
                        Register <FiArrowRight />
                    </Success>
                </Form>
                <Invalid onClick={() => setPage("auth")}>
                    <FiArrowLeft />
                    Back
                </Invalid>
            </FormContainer>
        </>
    );
};

export default Registration;
