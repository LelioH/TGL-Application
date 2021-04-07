import React from 'react'
import { useFormik } from 'formik'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import * as Yup from 'yup'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import api from '../../services/api'
import {
    FormContainer,
    Form,
    InputForm,
    Success,
    Invalid,
} from '../../pages/Logon/styles'

const Forgot = ({ setPage }) => {
    const MySwal = withReactContent(Swal)
    const resetForm = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid E-mail').required('Email Required')
        }),
        onSubmit: (async ({ email }) => {
            try {
                await api.post('/passwords', {
                    email,
                    redirect_url: 'http://localhost:3000/reset'
                })

                MySwal.fire({
                    position: "center",
                    icon: "success",
                    title: `${email}`,
                    text: "Check your e-mail for more instructions!",
                    showConfirmButton: false,
                    timer: 3000,
                    willOpen: setPage("auth"),
                });

            } catch (err) {
                MySwal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "error",
                    title: "Email Error",
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 3000,
                });
            }
        })
    })

    return (
        <>
            <FormContainer>
                <h1>Reset password</h1>
                <Form onSubmit={resetForm.handleSubmit}>
                    <InputForm
                        placeholder="Email"
                        id="email"
                        type="email"
                        {...resetForm.getFieldProps("email")}
                    />
                    <Success type="submit">
                        Send link <FiArrowRight />
                    </Success>
                </Form>
                <Invalid >
                    <FiArrowLeft />
                Back
            </Invalid>
            </FormContainer>
        </>
    )
}

export default Forgot
