import styled from 'styled-components'

export const Container = styled.div`
  @import url(https://db.onlinewebfonts.com/c/ed524d3938b150b70d120697d516e805?family=Bemio+Italic);
  max-width: 1900px !important;
  margin: auto;
  padding: 0;
  @font-face {
    font-family: 'GothamBook';
    src: url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot');
    src: url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot?#iefix')
        format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff2')
        format('woff2'),
      url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff')
        format('woff'),
      url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.ttf')
        format('truetype'),
      url('https://db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.svg#Gotham')
        format('svg');
  }
  @font-face {
    font-family: 'GothamBook';
    src: url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.eot');
    src: url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.eot?#iefix')
        format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.woff2')
        format('woff2'),
      url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.woff')
        format('woff'),
      url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.ttf')
        format('truetype'),
      url('https://db.onlinewebfonts.com/t/a9db6cd9116ff56da3875b35444f0c45.svg#GothamBook')
        format('svg');
  }

  @font-face {
    font-family: 'Bemio Italic';
    src: url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.eot');
    src: url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.eot?#iefix')
        format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.woff2')
        format('woff2'),
      url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.woff')
        format('woff'),
      url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.ttf')
        format('truetype'),
      url('https://db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.svg#Bemio Italic')
        format('svg');
  }

  font-family: 'GothamBook', sans-serif !important;

  max-width: 2000px;

  .bemioItalic {
    font-family: 'Bemio Italic', sans-serif !important;
  }
  .gothamBook {
    font-family: 'GothamBook', sans-serif !important;
  }

  button {
    border: none !important;
    outline: 0 !important;
    cursor: pointer !important;
    overflow: visible !important;
    background: transparent;
  }

  button:focus {
    outline: 0 !important;
  }
  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
  }

  .redesSociais {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  img {
    max-width: 100%;
  }

  .saibaNossosPrecos img {
    width: 250px;
  }

  .carousel {
    margin-bottom: 32px;
    /*     img {
      max-height: 65vh;
    } */
  }

  .semMarginEsq {
    margin-left: 0 !important;
    padding-left: 0 !important;
    text-align: start;
    align-self: flex-start;
    margin-right: auto;
  }
  .semMarginDir {
    margin-right: 0 !important;
    padding-right: 0 !important;
    text-align: end;
    align-self: flex-end;
    margin-left: auto;
  }

  .linhaSinuosa {
    max-width: 1106px !important;
    max-height: 76px !important;
    width: 100% !important;
  }

  .linhaSinuosaDireita {
    align-self: flex-end !important;
  }
  .linhaSinuosaEsq {
    align-self: flex-start !important;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .Contentor {
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    max-width: 100vw !important;
  }

  @media (max-width: 900px) {
    .agendeAqui img,
    .saibaNossosPrecos img {
      width: 200px;
      cursor: pointer;
    }
    .linhaSinuosa {
      min-width: 269px !important;
      min-height: 23px !important;
      width: 100% !important;
    }
    p,
    h4 {
      font-family: 'GothamBook';
      font-weight: 500 !important;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
    }
    .carousel {
      margin-bottom: 32px;
    }
  }

  .agendeAquiDireita {
    max-width: 320px;
    .agendeAqui {
      margin-bottom: 4px !important;
      max-width: 155px !important;
      padding: 0 !important;
    }
    .saibaPrecos {
      padding: 0 !important;
      max-width: 205px !important;
      margin-bottom: 4px !important;
    }
  }
  .agendeAqui {
    margin-bottom: 4px !important;
    max-width: 255px !important;
    padding: 0 !important;
  }
  .saibaPrecos {
    padding: 0 !important;
    max-width: 155px !important;
    margin-bottom: 4px !important;
  }
  .rowFooter {
    width: 95vw;
    max-width: 1900px;
    margin: 0;
    padding: 0;
  }

  .linhaSinuosaTratamentos,
  .linhaSinuosa {
    max-width: 780px !important;
    min-height: 30px !important;
  }

  @media (min-width: 900px) {
    .linhaSinuosaTratamentos,
    .linhaSinuosa {
      max-width: 780px !important;
      min-height: 60px !important;
      margin-bottom: 32px;
    }
    .paciente1 {
      align-items: baseline;
    }
    .paciente3 {
      align-items: flex-end !important;
    }
    .col2Footer:nth-child(2) {
      margin-bottom: 0px !important;
    }
  }

  .rowFooter .col:first-child img {
    height: 14px;
    /*  min-height: 12px; */
    margin: 6px 10px !important;
  }

  button,
  a,
  .button,
  .a,
  .link,
  .agendeAqui,
  .redesSociais {
    cursor: pointer !important;
  }

  @media (max-width: 868px) {
    .rowFooter {
      flex-direction: column;
      justify-content: center;
    }
    .col2Footer,
    .colFooter .row {
      padding: 10px;
      justify-content: center;
      align-items: center !important;
    }
    .rowFooter .col:first-child img {
      height: 14px;
      margin: 6px 1px !important;
    }
    .colFooter .row {
      flex-wrap: nowrap;
    }
  }
  .carousel-indicators {
    display: none;
  }
  .col2Footer:nth-child(2) {
    margin-bottom: 20px;
  }
  .footer11px2 {
    display: none !important;
  }

  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1200ms ease-out, transform 600ms ease-out,
      visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  .modal-content {
    background-color: transparent !important;
    border: none !important;
  }

  .agendeAquiEs {
    max-height: 28px;
  }
`
