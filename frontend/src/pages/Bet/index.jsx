import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart";
import {
    BetContainer,
    BetContent,
    GameOptions,
    GameOption,
    Balls,
    Ball,
    BetButtons,
    BetButton,
    AddToCart,
} from "./styles";

const Bet = () => {
    const [betType] = useState(useSelector(state => state.types.types));

    const [info, setInfo] = useState({ ...betType[0] });

    const [numbers, setNumbers] = useState([]);

    const [bets, setBets] = useState([]);

    let [cartValue, setCartValue] = useState(0);

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

    function addBallsToBet(number) {
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
            price: handleCambio(info.price),
            color: info.color,
            piso: info['min_cart_value'],
            type_id: info.id
        };
    }

    function handleBetToCart(bet) {
        clearBalls();

        handleUpdateCartPrice(bet.price);

        return setBets([...bets, bet]);
    }

    function handleRmvBet(bet) {
        let cart = bets;

        cart.splice(cart.indexOf(bet), 1);
        handleUpdateCartPrice("-" + bet.price);
        return setBets([...cart]);
    }

    function handleUpdateCartPrice(valeuStringfy) {
        const value = parseFloat(
            valeuStringfy.replaceAll(/R\$ /g, "").replace(",", ".")
        );
        setCartValue((cartValue += value));
    }

    let btnTypes = betType.map((field) => {
        return (
            <GameOption
                key={field.type}
                backgroundColor={
                    field.type === info.type ? field.color : "#FFF"
                }
                fontColor={!(field.type === info.type) ? field.color : "#FFF"}
                borderColor={field.color}
                onClick={() => {
                    handleTypeChange(field.type);
                }}
            >
                {field.type}
            </GameOption>
        );
    });

    let balls = Array.from(Array(info.range).keys()).map((field, index) => {
        return (
            <Ball
                key={index}
                color={numbers.includes(index + 1) ? info.color : "#ADC0C4"}
                onClick={() => addBallsToBet(index + 1)}
            >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </Ball>
        );
    });

    return (
        <>
            <Header isBet={true} />
            <BetContainer>
                <BetContent>
                    <h1>
                        <b>NEW BET </b>
                        FOR {info.type}
                    </h1>
                    <p>Choose a game</p>

                    <GameOptions>{btnTypes}</GameOptions>

                    <p>
                        <b>
                            Fill your bet
                            <br />
                        </b>
                        {info.description}
                    </p>
                    <Balls>{balls}</Balls>
                    <BetButtons>
                        <BetButton onClick={handleCompleteBet}>
                            Complete game
                        </BetButton>
                        <BetButton onClick={clearBalls}>Clear game</BetButton>
                        <AddToCart
                            cursor={
                                numbers.length === info["max_number"]
                                    ? "pointer"
                                    : "not-allowed"
                            }
                            onClick={
                                numbers.length === info["max_number"]
                                    ? () => handleBetToCart(handleNewBet())
                                    : null
                            }
                        >
                            <FiShoppingCart
                                size={20}
                                style={{ marginRight: 15 }}
                            />
                            Add to cart
                        </AddToCart>
                    </BetButtons>
                </BetContent>
                <Cart
                    bets={bets}
                    handleRmvBet={handleRmvBet}
                    cartValue={cartValue}
                />
            </BetContainer>
            <Footer />
        </>
    );
};

export default Bet;
