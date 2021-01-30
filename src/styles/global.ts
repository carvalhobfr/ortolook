import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
    font-family: 'Gotham Pro',  sans-serif !important;
  }

html{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  scroll-behavior: smooth;
}

  body {
    max-width: 2000px;
    font-family: 'Gotham';
    font-weight: normal;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 700;
  line-height: 1.2;
}

button, a , .link {
  cursor: pointer;
}

#__next{
  width: 99vw;
  max-width: 100%;
}

disabled{
  cursor: not-allowed
}

button {
    border: none !important;
    outline: 0 !important;
    cursor: pointer !important;
    overflow: visible !important;
    color: inherit !important;
    background: transparent !important;
  }

  button:focus {
  outline: 0 !important;
  }
`
