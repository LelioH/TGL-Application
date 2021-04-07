import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import {
  EvilIcons, MaterialCommunityIcons
} from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';

import { Creators as BetActions } from "../../store/reducers/bets";
import Cart from "../../components/Cart";
import styles from './styles'
import Header from '../../components/Header'

const Bet = ({ navigation }) => {
  const dispatch = useDispatch()
  const [betType] = useState(useSelector(state => state.types.types));

  const [info, setInfo] = useState({ ...betType[0] });

  const { bets } = useSelector(state => state.bets)

  const [numbers, setNumbers] = useState([]);

  let [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    dispatch(BetActions.SET_TOTAL({ total: cartValue }))
  }, [cartValue])

  function handleCambio(value) {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  }

  function handleBetType(type) {
    return betType.find((field) => field.type === type);
  }

  function clearBalls() {
    return setNumbers([]);
  }

  function handleTypeChange(type) {
    setInfo({ ...handleBetType(type) });
    clearBalls();
  }

  function handleBallsToBet(number) {
    let balls = numbers;
    if (balls.includes(number)) {
      balls.splice(balls.indexOf(number), 1);
    } else if (balls.length < info["max_number"]) {
      balls.push(number);
    } else {
      return;
    }
    return setNumbers([...balls]);
  }

  function handleCompleteBet() {
    let balls = numbers;

    for (let i = numbers.length; i < info["max_number"]; i++) {
      let currentNumber;
      do {
        currentNumber = Math.ceil(Math.random() * info.range);
      } while (numbers.includes(currentNumber));

      balls.push(currentNumber);
    }
    return setNumbers([...balls]);
  }

  function handleBetNumbers() {
    return numbers
      .map((field) => (field < 10 ? `0${field}` : field))
      .sort((a, b) => a - b)
      .join(" - ");
  }

  function handleNewBet() {
    return {
      numbers: handleBetNumbers(),
      type: info.type,
      price: info.price,
      color: info.color,
      piso: info['min_cart_value'],
      type_id: info.id
    };
  }

  function handleBetToCart(bet) {
    clearBalls();

    handleUpdateCartPrice(bet.price);

    dispatch(BetActions.SET_BETS({ bets: [...bets, bet] }))

  }

  function handleUpdateCartPrice(value) {
    setCartValue((cartValue += value));
  }

  const btnTypes = betType.map((field) => {
    return (
      <TouchableOpacity style={[styles.typeButton, {
        backgroundColor: field.type === info.type ? field.color : "#FFF",
        borderColor: field.color
      }]}
        key={field.type}
        onPress={() => {
          handleTypeChange(field.type);
        }}
      >
        <Text style={[styles.typeText, {
          color: !(field.type === info.type) ? field.color : "#FFF"
        }]}>{field.type}</Text>
      </TouchableOpacity>
    );
  });

  const balls = Array.from(Array(info.range).keys()).map((field, index) => {
    return (
      <TouchableOpacity style={[styles.balls, {
        backgroundColor: numbers.includes(index + 1) ? info.color : '#adc0c4',
        color: numbers.includes(index + 1) ? info.color : "#ADC0C4"
      }]}
        key={index}
        onPress={() => handleBallsToBet(index + 1)}
      >
        <Text style={styles.ballsNumber}>{(index + 1).toString().padStart(2, '0')}</Text>
      </TouchableOpacity>
    );
  });

  let selectedBalls = (
    <ScrollView style={styles.ballSelectedContainer} horizontal={true}>
      {numbers && numbers.map((number) => (
        <TouchableOpacity style={[styles.ballSelected, { backgroundColor: info.color, }]}
          onPress={() => handleBallsToBet(number)}
          key={number}
        >
          <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
            <Text style={styles.ballSelectedNumber}>{(number).toString().padStart(2, '0')}</Text>
            <FontAwesome name="close" size={10} color="#fff" />
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  )

  let descriptionField = (
    <View style={styles.description}>
      <Text style={styles.descriptionTitle}>Fill your bet</Text>
      <Text style={styles.descriptionText}>{info.description}</Text>
    </View>
  )

  if (numbers.length > 0) {
    descriptionField = (
      <>
        {selectedBalls}
        <View style={styles.gameButtons}>
          <TouchableOpacity style={styles.gameButton} onPress={() => handleCompleteBet()}>
            <Text style={styles.gameButtonText}>Complete Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameButton} onPress={() => clearBalls()}>
            <Text style={styles.gameButtonText}>Clear Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCart}
            onPress={
              () => numbers.length === info["max_number"]
                ? handleBetToCart(handleNewBet())
                : alert(`Você deve selecionar mais ${info["max_number"] - numbers.length} números!`)
            }>
            <EvilIcons name="cart" size={24} color="#fff" />
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <>
      <Header isHome={false} />
      <View style={styles.titles}>
        <Text style={styles.newBetTitle}>NEW BET FOR {info.type.toUpperCase()}</Text>
        <Text style={styles.chooseTitle}>Choose a game</Text>
        <View style={styles.typeButtons}>
          {btnTypes}
        </View>
        {descriptionField}
      </View>
      <ScrollView style={styles.betBalls} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {balls}
      </ScrollView>
    </>
  )
}

export default Bet