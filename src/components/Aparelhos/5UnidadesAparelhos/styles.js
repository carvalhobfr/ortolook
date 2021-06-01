import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;

  .container {
    min-width: 100%;
    width: 100%;
    margin: 0;
    display: flex;
  }
  .agendePop {
    h2 {
      text-align: right;
    }
  }
  .rowMain {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .col {
    padding: 0;
    p {
      padding: 0 1em;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .agendeAqui {
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
    max-height: 120px;
    margin-bottom: 16px;
  }
  .coluna3,
  .coluna4 {
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
  .coluna3,
  .coluna4 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: no-wrap;
    flex-wrap: no-wrap;
  }

  .coluna3 {
    max-width: 250px;
    min-width: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background: #802b67;
    border-radius: 120.5px 120.5px 0px 0px;
    button p {
      text-transform: uppercase;
    }
  }

  .imagemEstetica {
    min-width: 350px;
    max-width: 500px;
    width: 100%;
  }
  .redesSociais {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-wrap: wrap;
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
    display: -ms-grid;
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
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #802b67;
    font-weight: 900;
    margin-bottom: 32px;
  }

  @media (min-width: 900px) {
    .coluna3 {
      display: -ms-grid;
      display: grid;
    }
    .coluna1 h4 {
      font-size: 22px;
      line-height: 24px;
      padding: 8px;
    }
    .coluna1 img {
      max-width: 500px;
    }
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
    .ortolookContainer2 {
      padding: 16px !important;
    }
    .coluna3 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding-top: 50px;
    }
  }
  @media (min-width: 900px) {
    .coluna1 {
      max-width: 1400px;
      width: 100%;
    }
    .rowMain {
      width: 100%;
      max-width: 1300px;
    }
    .coluna3 {
      padding-top: 120px;
    }
    .openMobile {
      display: none !important;
    }
  }

  .linhaSinuosaTratamentos {
    max-width: 100%;
    width: 100%;
    min-height: 80px;
    padding: 0;
    background: url('/images/unidadesTitleES3.png') no-repeat;
    background-size: contain;
    background-position-x: left;
    margin-left: -32px;
    margin-bottom: 32px;
    margin-top: 108px;
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
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }

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
    .linhaSinuosaDepoimento {
      min-height: 50px;
      margin-right: -16px;
    }

    .ortolookContainer2 {
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
      padding-right: 0px;
      h4 {
        align-self: baseline;
      }
    }
    p {
      color: #802b67 !important;
    }
  }

  .ortolookContainer {
    padding: 32px 0px 32px 32px !important;
  }
  .buttonNossasUnidades {
    margin-bottom: 30px;
    background-position: center;
    background-size: cover;
  }

  .container:not(:root:root) {
    .coluna4 {
      justify-content: space-between;
    }
  }
  .coluna4 {
    justify-content: space-between !important;
    min-height: 401.53px;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-end;
  }

  .coluna1 img {
    margin: auto;
    margin-left: -15px !important;
  }
  h1 {
    margin: 64px 0 0;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 98px;
    text-align: left;
    -webkit-letter-spacing: -0.05em;
    -moz-letter-spacing: -0.05em;
    -ms-letter-spacing: -0.05em;
    letter-spacing: -0.05em;
    text-transform: uppercase;

    color: #802b67;
  }

  @media (min-width: 900px) {
    .coluna3 {
      background-color: transparent;
      background-image: url('/images/bgUnidadesES.png') !important;
      background-size: 70% 100%;
      background-position: bottom;
      background-repeat: no-repeat;
    }
  }

  @media (max-width: 900px) {
    /* min-height: 100vh;
    .container,
    .rowMain {
      min-height: 100vh;
    } */
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

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .coluna4 {
        justify-content: space-between;
      }
      @media (max-width: 900px) {
        min-height: 100vh;
        .container,
        .rowMain {
          min-height: 100vh !important;
        }
      }
    }
  }

  .coluna4 {
    justify-content: space-between;
  }

  .coluna4 {
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    .contentor {
      min-height: 100vh;
    }
    .container,
    .rowMain,
    .container,
    .coluna1 {
      min-height: 600px !important;
      justify-content: end;
    }
    .rowUnidades {
      padding-left: 32px;
    }
    .linhaCarrossel .col,
    .coluna4 {
      max-width: 100vw;

      width: 100%;
      min-width: 100%;
      margin-left: 0;
      button,
      .coluna4 {
        z-index: 1004;
      }
      p {
        min-width: 150px;
      }
    }
    .coluna1 {
      padding: 16px 0 !important;
      h4 {
        max-width: 70%;
        right: 0;
        align-self: flex-end;
      }
    }
  }

  .rowUnidades {
    display: flex;
    align-items: flex-start;
    width: 90vw;
  }

  @media (min-width: 900px) {
    .telURL {
      display: none !important;
    }
    .wppURL {
      left: 25%;
      width: 30%;
    }
    #unidades {
      display: flex;
      justify-content: space-between;
    }
    .rowUnidades {
      margin: 0px;
    }
    .rowMain {
      min-width: 90vw;
      min-height: 60vh;
      padding: 0 32px;
    }
    .imagemEstetica {
      min-width: 350px;
      max-width: 600px;
      max-height: 100%;
      width: 90%;
    }
    .agendeAqui {
      display: none !important;
    }
  }
  .coluna4 {
    max-width: 50%;
    z-index: 1004;
    button {
      z-index: 1004;
    }
  }
  .linhaCarrossel {
    max-width: 100vw;
    min-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    .col {
      max-width: 30%;
    }
    .col p {
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 0 !important;
    }
    .imagemEstetica {
      max-width: 100%;
    }
    .imagemUnidadeMob {
      max-width: 70% !important;
      min-width: 70% !important;
      z-index: 1001;
    }
    .telURL,
    .wppURL {
      z-index: 1003;
    }
    .linhaSinuosaTratamentos.linhaSinuosa.linhaSinuosaEsquerda.row {
      margin-bottom: 0px;
    }
  }

  .botaoNossasUnidades {
    background-image: url(images/botaoNossasUnidadesAP.png) !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    max-width: 250px;
    max-height: 50px;
    width: 80%;
    background-position: left !important;
    margin-bottom: 5vh;
    align-self: end;
  }
  .agendeAquiDireita {
    margin-right: -16px !important;
  }
  .telURL {
    position: absolute;
    bottom: 50px;
    left: 35%;
    height: 50px;
    width: 120px;
  }
  .wppURL {
    position: absolute;
    bottom: 50px;
    left: 25%;
    height: 50px;
    width: 100px;
  }
  @media only screen and (max-width: 600px) {
    .telURL {
      display: flex;
      position: absolute;
      bottom: 5%;
      left: 15%;
      height: 80px;
      width: 80px;
    }
    .wppURL {
      position: absolute;
      bottom: 5%;
      left: 40%;
      height: 80px;
      width: 100px;
    }
  }

  @media (min-width: 1500px) {
    .wppURL {
      left: 18%;
      width: 200px;
    }
  }
`
