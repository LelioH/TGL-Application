import React from "react";
import { useLocation } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import api from '../../services/api'
import {
    Form,
    InputForm,
    Success
} from "../../pages/Logon/styles";

import {
    FormResetContainer,
    Invalid
} from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Reset = ({ setPage }) => {
    const MySwal = withReactContent(Swal);

    let query = useQuery();

    const resetForm = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(6, "At least 6 characteres!")
                .required("Missing password"),
        }),

        onSubmit: (async ({ password }) => {
            try {
                await api.put('/passwords', {
                    password,
                    token: query.get('token')
                })

                MySwal.fire({
                    position: "center",
                    icon: "success",
                    title: "Password Changed!",
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

    return (
        <>
            <FormResetContainer>
                <h1>Reset password</h1>
                <Form onSubmit={resetForm.handleSubmit}>
                    <InputForm
                        placeholder="Password"
                        id="password"
                        type="password"
                        {...resetForm.getFieldProps("password")}
                    />
                    <Success type="submit">
                        Send link <FiArrowRight />
                    </Success>
                </Form>
                <Invalid href="/">
                    <FiArrowLeft />
                    Back
                </Invalid>
            </FormResetContainer>
        </>
    );
};

export default Reset;
