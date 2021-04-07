import React, { useEffect } from "react";
import { DrawerActions } from '@react-navigation/native'
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Creators as BetActions } from "../../store/reducers/bets";


import styles from './styles'
import api from '../../services/api'

const Cart = ({ navigation }) => {


    const { bets, total } = useSelector(state => state.bets)

    const dispatch = useDispatch()

    const selector = useSelector(state => state.auth)
    const token = selector.token

    async function handleSaveBets() {
        let betArr = [];
        if (bets.length > 0) {
            bets.map((bet) => {
                const betDone = {
                    type_id: bet.type_id,
                    numbers: bet.numbers
                }
                betArr.push(betDone);
            })
        }

        try {
            await api.post('/bets', betArr)
            dispatch(BetActions.CLEAR_CART())
            alert('Jogos salvos com sucesso!')
            navigation.navigate('Home')
        } catch (err) {
            console.log(err.request)
        }
    }

    function handleCambio(value) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    function verifyMinValue() {
        bets.length > 0 &&
            alert(`Min value: ${handleCambio(bets[0].piso)}`)
    }

    function handleRmvBet(bet) {
        let cart = bets;

        cart.splice(cart.indexOf(bet), 1);
        dispatch(BetActions.SET_TOTAL({ total: total - bet.price }))
        dispatch(BetActions.SET_BETS({ bets: [...cart] }))
    }

    let bet = <Text style={styles.empty}>Empty Cart! Make a bet!</Text>;

    if (bets.length > 0) {
        bet = bets.map((field, index) => {
            // console.log(field)
            return (
                <View style={styles.betTrash} key={index}>
                    <View style={styles.bets} color={field.color} >
                        <View style={[styles.sideLine, { backgroundColor: field.color }]} />
                        <View style={styles.betInfo}>
                            <Text style={styles.betNumbers}>{field.numbers}</Text>
                            <Text style={styles.betDate}>
                                (R$ {field.price})
                            </Text>
                            <Text style={[styles.betType, { color: field.color }]}>{field.type}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleRmvBet(field)}>
                        <Ionicons name="trash-outline" size={18} color="#707070" />
                    </TouchableOpacity>
                </View>
            );
        });
    }

    const saveBtn =
        bets.length > 0 && total >= bets[0].piso ? (
            <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveBets()}>
                <Text style={styles.saveButtonText}>Save</Text>
                <AntDesign name="arrowright" size={30} color="#B5C401" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.saveButton} onPress={() => verifyMinValue()}>
                <Text style={styles.saveButtonText}>Save</Text>
                <AntDesign name="arrowright" size={30} color="#B5C401" />
            </TouchableOpacity>
        );

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.closeButton}
                    onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="close" size={24} color="#B5C401" />
                </TouchableOpacity>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <MaterialCommunityIcons name="cart" size={30} color="#B5C401" />
                        <Text style={styles.cartTitle}>Cart</Text>
                    </View>
                    <ScrollView>
                        {bet}
                    </ScrollView>
                </View>
                <Text style={styles.cartTotal}>CART TOTAL: {handleCambio(total)} </Text>
                {saveBtn}
            </View>
        </>
    );
}

export default Cart