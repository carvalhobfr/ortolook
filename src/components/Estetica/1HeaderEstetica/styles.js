import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;
  min-height: 100vh;

  .container {
    min-width: 100%;
    min-height: 90vh;
    max-height: 900px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    min-height: 65svh;
  }

  .col {
    padding: 0;
    p {
      font-family: 'GothamBook';
      padding: 0 1em;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #802b67;
      padding: 16px 32px 0;
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
    max-height: 150px;
    margin-bottom: 16px;
    img {
      max-width: 150px;
    }
    margin-left: 0px;
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

  .imagemEstetica {
    min-width: 300px;
  }

  .imgCentral {
    text-align: center;
    margin: 5em auto auto;
  }
  .coluna1,
  .coluna3,
  .coluna3 .someMobile {
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    align-content: center;
    justify-content: space-between;
    /* margin-top: 16px; */
    max-width: 350px;
    max-height: 500px;
  }
  .coluna1 {
    justify-content: space-around;
  }
  .coluna3 {
    align-items: flex-end;
  }
  .coluna3 .someMobile {
    height: 100%;
    padding-top: 32px;
  }

  .coluna1 button,
  .coluna3 button {
    text-align: center;
  }

  .coluna1 button {
    text-align: start;
  }
  .coluna3 button {
    text-align: end;
  }

  @media (max-width: 900px) {
    .imgCentral {
      margin: 0 auto auto !important;
    }
    .coluna3 {
      min-height: 120px;
    }
    .someMobile {
      display: none !important;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
    .rowMain,
    .coluna1 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      align-items: center;
    }
    .rowMain {
      min-height: 550px;
    }
    .coluna1 button {
      text-align: center;
    }
    .coluna3 button {
      text-align: center;
    }
    .rowRedeSociais {
      .col {
        min-height: 50% !important;
        padding: 16px;
        align-self: center;
      }
      .text-right {
        text-align: center;
      }
    }
  }

  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
    .someMobile {
      display: -ms-flex !important;
      display: flex !important;
    }
    .coluna3 img {
      padding: 64px 32px 0 0;
      text-align: center;
    }
    .redesSociais {
      max-width: 20%;
      justify-content: flex-start !important;
    }
    .colunaLogo {
      min-width: 80%;
    }
  }

  /* .coluna3 div {
    min-height: 200px;
  } */

  .redesSociais {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: flex-end;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 2em;
    flex-direction: column;
    img {
      max-width: 25%;
      width: 35px;
      padding: 5px 4px;
    }
    display: flex !important;
    flex-direction: row;
  }

  .coluna3 img {
    max-width: 350px;
  }

  .colunaLogo img {
    max-width: 30%;
    min-width: 150px;
  }

  @media (max-width: 700px) {
    .redesSociais {
      margin-left: 1em;
      flex-direction: row;
    }
  }
  @media (max-width: 1200px) {
    .imgCentral {
      margin: auto;
    }
  }
  .rowRedeSociais .col {
    flex-direction: column;
    align-content: end;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @media (max-width: 1200px) {
      button {
        min-height: 30px;
      }
    }
  }
`
