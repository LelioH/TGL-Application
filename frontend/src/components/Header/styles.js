import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ebebeb;

    @media (max-width: 991px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const NavLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    margin-top: 0;

    a {
        font-size: 20px;
        font-weight: bold;
        color: #707070;
        text-decoration: none;
        cursor: pointer;
    }

    @media (max-width: 991px) {
        flex-direction: row;
        align-items: center;

        a {
            font-size: 10px;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 44px;
    font-weight: bold;
    margin: 0 74px -25px 74px;
    font-style: italic;
    color: #707070;
    cursor: default;

    span {
        top: 70px;
        left: 130px;
        width: 107px;
        height: 7px;
        background: #b5c401 0% 0% no-repeat padding-box;
        border-radius: 6px;
        opacity: 1;
    }

    @media (max-width: 991px) {
        font-size: 22px;
        margin: 0 10px;

        span {
            top: 90px;
            width: 54px;
        }
    }
`;

export const NavRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    font-weight: bold;
    padding-right: 25px;

    a {
        font-size: 20px;
        color: #707070;
        text-decoration: none;
        margin: 0 20px;
        cursor: pointer;
    }

    button {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        font-family: inherit;
        color: #707070;
        outline: none;
        background-color: transparent;
        border: none;
        margin: 0 141px 0 25px;
        cursor: pointer;
    }

    @media (max-width: 991px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 5px;
        a {
            font-size: 10px;
            margin: 0 10px;
        }
        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            font-size: 10px;
        }
    }
`;
