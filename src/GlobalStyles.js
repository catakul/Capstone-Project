import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 12px;
    font-size: 0.75rem;
    font-family: sans-serif;
    text-align: center;
  }

  main {
    margin-top: 65px;

    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
