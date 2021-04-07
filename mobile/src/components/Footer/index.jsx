import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Copyright 2020 Luby Software</Text>
    </View>
  )
}

export default Footer