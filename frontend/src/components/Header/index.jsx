import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Creators as AuthCreators } from "../../store/reducers/auth";
import { HeaderContainer, NavLeft, Logo, NavRight } from "./styles";

const Header = ({ isBet, name }) => {
    const dispatch = useDispatch()
    const MySwal = withReactContent(Swal);

    let homeBtn = isBet ? <Link to="/home">Home</Link> : null;

    function handleLogout() {
        MySwal.fire({
            position: "center",
            imageUrl:
                "https://media.giphy.com/media/g0NgqKPkVeSOGZsSmK/giphy.gif",
            imageWidth: 200,
            imageHeight: 200,
            title: "Good Bye!",
            showConfirmButton: false,
            timer: 3000,
        });
        dispatch(AuthCreators.LOG_OUT());
    }

    return (
        <>
            <HeaderContainer>
                <NavLeft>
                    <Logo>
                        TGL<span></span>
                    </Logo>
                    {homeBtn}
                </NavLeft>
                <NavRight>
                    <Link to="/account">Account</Link>
                    <button
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        Logout <FiArrowRight style={{ marginLeft: 15 }} />
                    </button>
                </NavRight>
            </HeaderContainer>
        </>
    );
};

export default Header
