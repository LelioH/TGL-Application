import styled from "styled-components";

export const FormResetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;

    h1 {
        font-size: 32px;
        color: #707070;
    }

    @media (max-width: 991px) {
        h1 {
            font-size: 24px;
        }
    }
`;

export const Invalid = styled.a`
    margin-top: 30px;
    background-color: transparent;
    border: none;
    font-size: 35px;
    font-weight: bold;
    color: #707070;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    :visited {
        text-decoration: none;
        color: #707070;
    }

    @media (max-width: 991px) {
        height: 48px;
        margin-bottom: 8px;
        font-size: 32px;
        display: flex;
        flex-direction: row;
    }
`;
