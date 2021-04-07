import React from "react";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import api from '../../services/api'
import {
    CartContainer,
    BetArea,
    BetsList,
    BetInfo,
    EmptyCart,
    Save,
} from "./styles";

const Cart = ({ bets, handleRmvBet, cartValue }) => {
    const selector = useSelector(state => state.auth)
    const token = selector.token

    console.log(token)

    const MySwal = withReactContent(Swal);

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

            MySwal.fire({
                position: "center",
                icon: "success",
                title: "Bets Made! Good Luck!",
                showConfirmButton: false,
                showCloseButton: false,
                timer: 3000,
            });

        } catch (err) {
            MySwal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: "Failed to save bets!",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 3000,
            });
        }
    }

    function handleCambio(value) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    function verifyMinValue() {
        bets.length > 0 &&
            MySwal.fire({
                position: "center",
                icon: "warning",
                title: `Min value: ${handleCambio(bets[0].piso)}`,
                showConfirmButton: true,
            });
    }

    let bet = <EmptyCart>Empty Cart! Make a bet!</EmptyCart>;

    if (bets.length > 0) {
        bet = bets.map((field, index) => {
            return (
                <BetsList key={index}>
                    <FiTrash2
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRmvBet(field)}
                        size={36}
                    />
                    <BetInfo color={field.color}>
                        <h3>{field.numbers}</h3>
                        <section>
                            <h1>{field.type}</h1>
                            {field.price}
                        </section>
                    </BetInfo>
                </BetsList>
            );
        });
    }

    const saveBtn =
        bets.length > 0 && cartValue >= bets[0].piso ? (
            <Link to="/home">
                <Save onClick={handleSaveBets}>
                    <p>Save</p>
                    <FiArrowRight style={{ marginLeft: 15 }} />
                </Save>
            </Link>
        ) : (
            <Save onClick={() => verifyMinValue()}>
                <p>Save</p>
                <FiArrowRight style={{ marginLeft: 15 }} />
            </Save>
        );


    return (
        <>
            <CartContainer>
                <h1>
                    <b>CART</b>
                </h1>
                <BetArea>{bet}</BetArea>
                <h1>
                    <b>CART</b> TOTAL: {handleCambio(cartValue)}
                </h1>
                {saveBtn}
            </CartContainer>
        </>
    );
};


export default Cart
