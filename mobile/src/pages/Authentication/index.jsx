import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Creators as AuthActions } from "../../store/reducers/auth";

import Logon from '../../components/Logon/index'
import Footer from '../../components/Footer/index'
import styles from '../../components/Logon/styles'

const Authentication = ({ navigation }) => {
  const dispatch = useDispatch({ type: AuthActions.LOG_IN });

  const [showPassword, setShowPassword] = useState(true)

  function handleLogin(email, password) {
    const response = dispatch(AuthActions.LOG_IN({ email, password }));
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
    <View style={styles.container}>
      <Logon />
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Authentication</Text>
        <View style={styles.form} onSubmit={(event) => {
          authForm.handleSubmit(event)
        }} >
          <TextInput style={[styles.inputForm, styles.inputBorder]}
            name='email'
            placeholder="Email"
            value={authForm.values.email}
            onChangeText={authForm.handleChange('email')}
            label={'Email'}
          />
          {authForm.errors.email && authForm.touched.email ? (
            <Text style={styles.errorFormik}>{authForm.errors.email}</Text>
          ) : null}

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
              value={authForm.values.password}
              onChangeText={authForm.handleChange('password')}
              label={'Password'} />
              {(authForm.errors.password && authForm.touched.password)? (
                <Text style={styles.errorFormik}>{authForm.errors.password}</Text>) : null}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons style={{ marginHorizontal: 10 }} name="eye-outline" size={24} color="#707070" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.push('Reset')}>
            <Text style={styles.forgotText}>I forgot my password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.success}
            onPress={() => authForm.handleSubmit()}
          >
            <Text style={styles.successText}>Log In</Text>
            <AntDesign name="arrowright" size={24} color="#B5C401" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.invalid} onPress={() => navigation.push('Registration')}>
          <Text style={styles.invalidText}>Sign Up</Text>
          <AntDesign name="arrowright" size={24} color="#707070" />
        </TouchableOpacity>
      </View>
      <Footer />
    </View >
  )
}

export default Authentication