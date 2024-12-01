import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --turquesa: #40E0D0;
    --turquesa-escuro: #20B2AA;
    --roxo: #6A5ACD;
    --roxo-claro: #9370DB;
    --branco: #ffffff;
    --cinza-claro: #f7f7f7;
    --cinza-escuro: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: var(--cinza-claro);
    color: var(--cinza-escuro);
    line-height: 1.6;
    padding: 20px;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
    color: var(--roxo);
  }

  button {
    cursor: pointer;
    background-color: var(--turquesa);
    color: var(--branco);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--turquesa-escuro);
  }

  input, textarea {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid var(--turquesa-escuro);
    border-radius: 5px;
    width: 100%;
    background-color: var(--branco);
  }

  form {
    max-width: 400px;
    margin: 0 auto;
    background: var(--branco);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  a {
    color: var(--roxo);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
