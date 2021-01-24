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
      font-weight: 600;
      font-size: 18px;
      line-height: 17px;
      color: #802b67;
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
    background: #e9cebf;
    border-radius: 120.5px 120.5px 0px 0px;
    button p {
      text-transform: uppercase;
    }
  }

  .imagemEstetica {
    min-width: 350px;
    max-width: 900px;
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
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #802b67;
    font-weight: 600;
    margin-bottom: 32px;
  }

  @media (min-width: 900px) {
    .coluna3 {
      display: -ms-grid;
      display: grid;
    }
    .coluna1 h4 {
      font-size: 24px;
      line-height: 32px;
      padding: 32px;
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
    .ortolookContainer {
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
    }
    .coluna3 {
      padding-top: 120px;
    }
    .openMobile {
      display: none !important;
    }
  }

  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 100px;
    padding: 0;
    background: url('/images/unidadesTitleES2.png') no-repeat;
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
    .linhaSinuosaDepoimento {
      min-height: 50px;
      margin-right: -16px;
    }
  }

  .ortolookContainer {
    padding: 32px 0px 32px 32px !important;
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
    .rowMain {
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
    /* .coluna1 {
      padding-right: 0px;
    } */
  }
`