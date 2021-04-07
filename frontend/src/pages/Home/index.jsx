import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";


import api from '../../services/api'
import { Creators } from '../../store/reducers/types'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    HomeContainer,
    HomeContent,
    GameOptions,
    GameButton,
    GamesContainer,
    Game,
} from "./styles";

const Home = () => {
    const [betList, setBetList] = useState([])
    const selectorType = useSelector(state => state.types.types)
    const [betType, setBetType] = useState(selectorType)
    const [bets, setBets] = useState([])
    const selector = useSelector(state => state.auth)
    const token = selector.token
    const dispatch = useDispatch()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getBets() {
        try {
            const response = await api.get('/bets', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = response.data

            setBetList(data)
            setBets(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(getBets, [setBetList, token])

    useEffect(() => {
        dispatch(Creators.GET_TYPES_REQUEST())
    }, [dispatch])

    function handleBetFilter(index) {
        let aux = betType;
        aux[index].selected = !this.selected;
        setBetType([...aux]);

        if (handleVerifyFilterSelected()) {
            setBets(
                betList.filter((bet) => {
                    for (let i = 0; i < aux.length; i++) {
                        if (bet.types.type === aux[i].type && aux[i].selected)
                            return true;
                    }

                    return false;
                })
            );
        } else {
            setBets(betList);
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
            <GameButton
                key={field.type}
                onClick={() => handleBetFilter.call(field, [index])}
                backgroundColor={field.selected ? field.color : "#FFFFFF"}
                fontColor={!field.selected ? field.color : "#FFFFFF"}
                borderColor={field.color}
            >
                {field.type}
            </GameButton>
        );
    });

    const betsField = bets.map((field, index) => {
        return (
            <Game key={index} color={field.types.color}>
                <span></span>
                <div>
                    <h1>{field.numbers}</h1>
                    <p>
                        {new Date(field.created_at).toLocaleDateString('pt-br')} -
                        (
                            {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(field.price)})
                    </p>
                    <h4>{field.types.type}</h4>
                </div>
            </Game>
        );
    });

    return (
        <>
            <Header isBet={false} />
            <HomeContainer>
                <HomeContent>
                    <GameOptions>
                        <h1>RECENT GAMES</h1>
                        <p>Filters</p>
                        {filterBtn}
                        <Link to="/bet">
                            New Bet
                            <FiArrowRight />
                        </Link>
                    </GameOptions>
                </HomeContent>
                <GamesContainer>{betsField}</GamesContainer>
            </HomeContainer>
            <Footer />
        </>
    );
};

export default Home
