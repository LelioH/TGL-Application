import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api'
import Logon from '../../components/Logon/index'
import Footer from '../../components/Footer/index'
import styles from '../../components/Logon/styles'

const Registration = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true)

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
        alert('Successful Operation')
        navigation.push('Authentication')
      } catch (err) {
        console.log(err)
      }
    })

  });
  return (
    <View style={styles.container}>
      <Logon />
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Registration</Text>
        <View style={styles.form} onSubmit={(event) => {
          registrationForm.handleSubmit(event)
        }}>
          <TextInput style={[styles.inputForm, styles.inputBorder]} placeholder="Username"
            name='username'
            value={registrationForm.values.username}
            onChangeText={registrationForm.handleChange('username')}
            label={'Username'} />

          <TextInput style={[styles.inputForm, styles.inputBorder]} placeholder="E-mail"
            name='email'
            value={registrationForm.values.email}
            onChangeText={registrationForm.handleChange('email')}
            label={'Email '} />

          <View style={{
            borderBottomWidth: 1,
            borderColor: '#ebebeb',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <TextInput style={[styles.inputForm, { flex: 1 }]}
              name='password'
              placeholder="Password"
              secureTextEntry={showPassword}
              value={registrationForm.values.password}
              onChangeText={registrationForm.handleChange('password')}
              label={'Password'} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons style={{ marginHorizontal: 10 }} name="eye-outline" size={24} color="#707070" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.success}
            onPress={registrationForm.submitForm}
          >
            <Text style={styles.successText}>Register</Text>
            <AntDesign name="arrowright" size={24} color="#B5C401" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.invalid}
          onPress={() => navigation.push('Authentication')}>
          <AntDesign name="arrowleft" size={24} color="#707070" />
          <Text style={styles.invalidText}>Back</Text>

        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default Registration