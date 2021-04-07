import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import NumberFormat from 'react-number-format';
import { FontAwesome } from '@expo/vector-icons';

import { Creators as BetActions } from "../../store/reducers/bets";
import api from '../../services/api'
import { Creators } from '../../store/reducers/types'
import styles from './styles'
import Header from '../../components/Header'


const Home = ({ navigation }) => {
    const { cleared } = useSelector(state => state.bets)
    const [betList, setBetList] = useState([])
    const selectorType = useSelector(state => state.types.types)
    const [betType, setBetType] = useState(selectorType)
    const [games, setGames] = useState([])
    const selector = useSelector(state => state.auth)
    const token = selector.token
    const dispatch = useDispatch()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getBets() {
        try {
            const response = await api.get('/bets')
            const data = response.data

            setBetList(data)
            setGames(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBets();
        return () => {
            console.log('cleanup')
        }
    }, [])

    useEffect(() => {
        if (cleared) {
            getBets()
            // console.log(cleared)
        }
    }, [cleared])

    useEffect(() => {
        dispatch(Creators.GET_TYPES_REQUEST())
    }, [dispatch])

    function handleBetFilter(index) {
        let aux = betType;
        aux[index].selected = !this.selected;
        setBetType([...aux]);

        if (handleVerifyFilterSelected()) {
            setGames(
                betList.filter((bet) => {
                    for (let i = 0; i < aux.length; i++) {
                        if (bet.types.type === aux[i].type && aux[i].selected)
                            return true;
                    }
                    return false;
                })
            );
        } else {
            setGames(betList);
        }

        return;
    }

    function handleVerifyFilterSelected() {
        for (let i = 0; i < betType.length; i++) {
            if (betType[i].selected) {
                return true
            };
        }
        return false;
    }

    let filterBtn = betType && betType.map((field, index) => {
        return (
            <TouchableOpacity
                style={[styles.typeButton,
                {
                    borderColor: field.color,
                    backgroundColor: field.selected ? field.color : "#FFFFFF"
                }]}
                key={field.type}
                onPress={() => handleBetFilter.call(field, [index])}
            >
                <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
                    <Text
                        style={[styles.typeText, { color: !field.selected ? field.color : "#FFFFFF" }]}>
                        {field.type}
                    </Text>
                    <FontAwesome name="close" size={10} color="#fff" />
                </View>
            </TouchableOpacity>
        );
    });

    const betsField = games.map((field, index) => {
        const number = field.price && field.price.toFixed(2).toString().replace('.', ',')
        return (
            <View style={styles.bets} key={index} color={field.types.color}>
                <View style={[styles.sideLine, { backgroundColor: field.types.color }]} />
                <View style={styles.betInfo}>
                    <Text style={styles.betNumbers}>{field.numbers}</Text>
                    <Text style={styles.betDate}>
                        {new Date(field.created_at).toLocaleDateString('pt-br')} -
                        ({number})
                    </Text>
                    <Text style={[styles.betType, { color: field.types.color }]}>{field.types.type}</Text>
                </View>
            </View>
        );
    });

    return (
        <>
            <Header isHome={true} />
            <View style={styles.titles}>
                <Text style={styles.recentGames}>RECENT GAMES</Text>
                <Text style={styles.filtersTitle}>Filters</Text>
                <View style={styles.typeButtons}>
                    {filterBtn}
                </View>
            </View>
            <ScrollView style={styles.betList}>
                {betsField}
            </ScrollView>
        </>
    )
}

export default Home