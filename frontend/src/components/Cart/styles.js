import styled from "styled-components";

export const CartContainer = styled.div`
    max-width: 317px;

    margin-left: 75px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    background-color: #fff;
    padding: 32px 19px 0 19px;
    color: #707070;

    h1 {
        font-size: 24px;
        font-weight: lighter;
    }
`;

export const BetArea = styled.div`
    padding-top: 0;
    padding-right: 6px;
    max-height: 450px;
    height: fit-content;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 20px 0;
`;

export const BetsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
`;

export const BetInfo = styled.div`
    margin-left: 10px;
    border-radius: 4px 0 0 4px;
    border-left: 4px solid #868686;
    width: 240px;
    padding-left: 10px;
    word-wrap: break-word;
    border-left: 4px solid ${(props) => props.color};

    h3 {
        font-style: italic;
        font-weight: bold;
        font-size: 15px;
        color: #868686;
        word-wrap: break-word;
        max-width: 313px;
        margin-bottom: 6px;
    }

    section {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #868686;
        font-weight: normal;
        font-style: normal;

        h1 {
            font-style: italic;
            font-weight: bold;
            font-size: 16px;

            color: ${(props) => props.color};
            margin-right: 15px;
        }
    }
`;

export const Save = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -19px;
    width: 315px;
    height: 96px;
    font-size: 35px;
    font-weight: bold;
    text-decoration: none;
    color: #27c383;
    background-color: #f4f4f4;
    border: 1px solid #e2e2e2;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
`;

export const EmptyCart = styled.div`
    display: flex;
    margin: 45px;
    font-size: 32px;
    color: #27c383;
`;
