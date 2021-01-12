import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;

  @font-face {
    font-family: 'Gotham';
    src: url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot');
    src: url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot?#iefix')
        format('embedded-opentype'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff2')
        format('woff2'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff')
        format('woff'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.ttf')
        format('truetype'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.svg#Gotham')
        format('svg');
  }
  font-family: 'Gotham';
  .container {
    min-width: 100%;
    width: 100%;
    margin: 0;
  }
  .agendePop {
    h2 {
      text-align: right;
    }
  }
  .rowMain {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .col {
    padding: 0;
    p {
      padding: 0 1em;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 17px;
      color: #802b67;
    }
  }
  .agendeAqui {
    padding: 0;
    display: flex;
    align-items: start;
    flex-direction: column !important;
    max-height: 120px;
    margin-bottom: 16px;
  }
  .coluna3 {
    text-align: end;
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 46px;
      text-align: right;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      color: #802b67;
    }
  }
  .coluna1,
  .coluna3 {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
  }

  .coluna3 {
    max-width: 350px;
    min-width: 300px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .imagemEstetica {
    min-width: 350px;
  }
  .redesSociais {
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    .instagram {
      margin-left: 6px;
    }
    img {
      max-width: 100%;
    }
  }

  .coluna1,
  .coluna3 {
    display: grid;
    padding: 16px;
  }

  .coluna1 button {
    text-align: start;
  }
  .coluna3 button {
    text-align: end;
  }

  .coluna1 button,
  .coluna3 button {
    text-align: center;
  }

  h4 {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
    color: #802b67;
    font-weight: 900;
  }

  @media (min-width: 900px) {
    .coluna3 {
      display: grid;
    }
    .coluna1 h4 {
      font-size: 36px;
      line-height: 44px;
      padding: 32px;
    }
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
    .coluna3 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
  }

  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 100px;
    padding: 0;
    background: url('/images/unidadesTitleES.png') no-repeat;
    background-size: contain;
    background-position-x: left;
    margin-left: -32px;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }
  }
`
