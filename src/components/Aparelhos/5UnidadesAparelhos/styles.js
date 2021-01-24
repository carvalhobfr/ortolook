import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;

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
    align-items: flex-end;
  }

  .col {
    padding: 0;
    p {
      padding: 0 1em;
      font-style: normal;
      font-weight: 500;
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
      font-weight: 700;
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
  }

  .imagemEstetica {
    min-width: 350px;
    max-width: 800px;
    justify-self: center;
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
    color: #fff;
  }

  .coluna1 button,
  .coluna3 button {
    text-align: center;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
    color: #802b67;
    font-weight: 500;
    margin: 16px 0;
  }

  @media (min-width: 900px) {
    .coluna3 {
      display: grid;
      background-image: url(images/bgUnidadesAP.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      min-height: 700px;
    }
    h4 {
      font-size: 24px;
      line-height: 32px;
      padding: 32px;
    }
    .coluna3 button p {
      color: #fff;
    }
    .linhaSinuosaTratamentos {
      margin-bottom: 30px;
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
      margin: auto;
    }
    h4 {
      font-size: 16px;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
  }

  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 70px;
    padding: 0;
    background: url('/images/unidadesAPTitle.png') no-repeat;
    background-size: contain;
    background-position-x: right;
    margin-bottom: 16px;
    margin-top: 64px;
  }

  h4 {
    font-weight: 500;
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

  .ortolookContainer2 h1 {
    margin: 64px 0 16px;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 98px;
    text-align: right;
    -webkit-letter-spacing: -0.05em;
    -moz-letter-spacing: -0.05em;
    -ms-letter-spacing: -0.05em;
    letter-spacing: -0.05em;
    text-transform: uppercase;

    color: #802b67;
  }

  @media (max-width: 900px) {
    strong {
      font-size: 32px !important;
      line-height: 36px !important;
    }
    h1 {
      font-size: 32px !important;
      line-height: 36px !important;
      text-align: start !important;
    }
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #802b67;
    font-weight: 500;
    margin-bottom: 32px;
  }

  @media (min-width: 900px) {
    .coluna1 h4 {
      font-size: 24px;
      line-height: 32px;
      padding: 32px;
    }
  }
  @media (max-width: 900px) {
    .ortolookContainer {
      padding: 16px !important;
    }
    .rowMain {
      display: flex;
      flex-direction: column;
    }
    .container {
      justify-content: flex-end;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }

    .imagemEstetica {
      min-width: 350px;
      max-width: 300px;
      width: 100%;
    }
    .coluna1 {
      justify-content: flex-end;
      align-items: flex-end;
      justify-content: center;
      padding-right: 0px;
      h4 {
        align-self: baseline;
      }
    }
  }
`
