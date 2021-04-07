import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { Creators as AuthCreators } from "../../store/reducers/auth";
import { Creators as BetActions } from "../../store/reducers/bets";


import styles from './styles'

const Header = ({ isHome }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  let cartButton = isHome ? null :
    (<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <MaterialCommunityIcons name="cart" size={30} color="#B5C401" />
    </TouchableOpacity>);

  function handleLogout() {
    dispatch(BetActions.CLEAR_CART())
    dispatch(AuthCreators.LOG_OUT());
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <View style={styles.logo}>
          <Text style={styles.headerTitle}>TGL</Text>
          <View style={styles.headerUnderline} />
        </View>
      </TouchableOpacity>
      <View style={styles.rigthHeader}>
        {cartButton}
        <TouchableOpacity onPress={() => {
          handleLogout()
        }}>
          <MaterialCommunityIcons name="location-exit" size={30} color="#c1c1c1" style={{ marginLeft: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header