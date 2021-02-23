import { createGlobalStyle } from 'styled-components'
import './todos.scss'

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
    max-width: 2000px !important;
    font-family: 'GothamBook';
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
    background: transparent ;
  }

  button:focus {
  outline: 0 !important;
  }

  .modalForm {
    width: 100vw;
    margin: 0 !important;
    max-width: 1000px;
    .modal-content {
      width: 1000px;
      border: none !important;
      background: transparent;
    }
  }
  .modal-content {
    background-color: transparent !important;
    border: none !important;
  }
`
