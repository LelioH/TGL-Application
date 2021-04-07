import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useFormik } from "formik";
import * as Yup from "yup";

import api from '../../services/api'
import Logon from '../../components/Logon/index'
import Footer from '../../components/Footer/index'
import styles from '../../components/Logon/styles'



const Reset = ({ navigation }) => {

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
        await api.put('/passwords', data)
        alert('successful operation')
        navigation.push('Authentication')
      } catch (err) {
        alert('successful operation')
        navigation.push('Authentication')
      }
    })
  });

  return (
    <View style={styles.container}>
      <Logon />
      <View style={styles.formContainer}>

        <Text style={styles.formTitle}>Reset Password</Text>

        <View style={styles.form} onSubmit={resetForm.handleSubmit}>

          <TextInput style={[styles.inputForm, styles.inputBorder]}
            name='email'
            placeholder="Email"
            value={resetForm.values.email}
            onChangeText={resetForm.handleChange('email')}
            label={'Email '}
          />

          <TouchableOpacity style={styles.success}
            onPress={() => {
              alert('successful operation')
              resetForm.submitForm
              navigation.push('Authentication')
            }}
          >
            <Text style={styles.successText}>Send link</Text>
            <AntDesign name="arrowright" size={24} color="#B5C401" />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.invalid}
          onPress={() => navigation.push('Authentication')}>
          <AntDesign name="arrowleft" size={24} color="#707070" />
          <Text style={styles.invalidText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.invalid}
          onPress={() => navigation.push('Registration')}>
          <Text style={styles.invalidText}>Sign Up</Text>
          <AntDesign name="arrowright" size={24} color="#707070" />
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default Reset