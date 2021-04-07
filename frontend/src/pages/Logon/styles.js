import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: italic;
    color: #707070;

    @media (max-width: 991px){
        max-width: 560px;
        justify-content: center;
    }

}
`;

export const Title = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;

    h2 {
        font-size: 65px;
        flex-wrap: wrap;
        width: 244px;
    }
    div {
        padding: 7px 57px;
        background-color: #b5c401;
        color: #fff;
        border-radius: 100px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0 20px 0;
    }
    h1 {
        font-size: 83px;
    }

    @media (max-width: 991px) {
        padding-bottom: 30px;
        border-bottom: 2px solid #ebebeb;
        width: 100%;
        h2 {
            font-size: 20px;
            width: 122px;
        }
        div {
            padding: 3.5px 28.5px;
            font-size: 11px;
            margin: 15px 0 10px 0;
        }
        h1 {
            font-size: 30px;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 25px 0 15px;

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

export const Form = styled.form`
    margin-top: 26px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 14px;
    width: 352px;
    display: flex;
    flex-direction: column;

    @media (max-width: 991px) {
        width: 285px;
    }
`;

export const InputForm = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ebebeb;
    border-radius: 14px 14px 0 0;
    padding: 30px 0 30px 30px;
    font-size: 17px;
    font-style: italic;
    outline: none;
    ::placeholder {
        color: #9d9d9d;
        font-size: 17px;
        font-weight: bold;
    }

    @media (max-width: 991px) {
        padding: 20px 0 20px 20px;
        font-size: 13px;
        ::placeholder {
            font-size: 13px;
        }
    }
`;

export const ForgotPassword = styled.div`
    margin-top: 26px;
    background-color: transparent;
    border: none;
    font-size: 17px;
    color: #c1c1c1;
    margin-left: 160px;
    margin-bottom: 44px;
    cursor: pointer;
    outline: none;

    @media (max-width: 991px) {
        font-size: 13px;
        margin-left: 140px;
        margin-bottom: 22px;
    }
`;

export const Success = styled.button`
    min-width: fit-content;
    height: 96px;
    background-color: transparent;
    border: none;
    border-radius: 0 0 10px 10px;
    opacity: 1;
    color: #b5c401;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;

    @media (max-width: 991px) {
        height: 48px;
        margin-bottom: 8px;
        font-size: 32px;
        display: flex;
        flex-direction: row;
    }
`;

export const Invalid = styled.button`
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

    @media (max-width: 991px) {
        height: 48px;
        margin-bottom: 8px;
        font-size: 32px;
        display: flex;
        flex-direction: row;
    }
`;
