import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    flex-direction: column;


    ::-webkit-scrollbar-corner {
            background: transparent;
    }

    @media (min-width: 800px) {
        flex-direction: row;
    }

  }

  body{
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: italic;
    background-color: #F7F7F7;
    color: #707070;
  }


`;
