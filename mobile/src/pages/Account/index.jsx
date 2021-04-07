import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import api from '../../services/api'
import Header from '../../components/Header'
import styles from '../../components/Logon/styles'

const Account = ({ navigation }) => {


  const selector = useSelector(state => state.auth)
  const token = selector.token
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

      } catch (err) {
        console.log(err)
      }
    })
  });
  return (
    <>
      <Header isHome={true} />
      <View style={[styles.formContainer, { marginVertical: 60 }]}>
        <Text style={styles.formTitle}>Account</Text>
        <View style={styles.form} onSubmit={(event) => {
          updateForm.handleSubmit(event)
        }}>
          <TextInput style={styles.inputForm} placeholder="Username"
            name='username'
            value={updateForm.values.username}
            onChangeText={updateForm.handleChange('username')}
            label={'Username'} />

          <TextInput style={styles.inputForm} placeholder="E-mail"
            name='email'
            value={updateForm.values.email}
            onChangeText={updateForm.handleChange('email')}
            label={'Email '} />

          <TextInput style={styles.inputForm} placeholder="Password"
            name='password'
            label={'Password '}
            secureTextEntry={true}
            value={updateForm.values.password}
            onChangeText={updateForm.handleChange('password')}
          />

          <TouchableOpacity style={styles.success}
            onPress={updateForm.submitForm}
          >
            <Text style={styles.successText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Account