import styled from 'styled-components'

export const Contentor = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0px;

  .container {
    min-width: 100%;
    width: 100%;
    margin: 0;
  }
  .agendePop {
    h2 {
      text-align: right;
      margin-right: 16px;
    }
  }
  .rowMain {
    display: flex;
    flex-direction: row;
    min-width: 100%;
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
    cursor: pointer;
    z-index: 1;
  }
  .coluna3 {
    text-align: end;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 54px;
      text-align: right;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      padding-right: 18px;
      color: #802b67;
    }
  }
  .coluna1,
  .coluna3 {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
  }

  .redesSociais {
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    img {
      max-width: 100%;
      padding: 0 8px;
    }
  }

  .fotoHeader {
    margin-top: -60px;
    /* max-height: 710px; */
    max-width: 400px;
    margin-left: 10%;
  }
  .fotoHeader2 {
    max-height: 673px;
    max-width: 400px;
    align-self: flex-end;
    z-index: 2;
    margin-top: 32px;
  }

  button,
  a,
  .link {
    cursor: pointer !important;
  }

  .coluna3 button {
    margin-left: -16px;
  }

  @media (max-width: 1100px) {
    strong {
      font-size: 36px !important;
      line-height: 42px !important;
    }
  }
  @media (max-width: 900px) {
    strong {
      font-size: 28px !important;
      line-height: 28px !important;
    }
    .ortolookContainer h1 {
      font-size: 32px !important;
      line-height: 36px !important;
    }
    .fotoHeader {
      max-height: 500px;
    }

    .redesSociais {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-content: flex-start;
      margin-left: 16px;
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
      padding: 32px 0;
      text-align: center;
    }
    .redesSociais {
      max-width: 20%;
      justify-content: flex-start !important;
    }
    .colunaLogo {
      min-width: 80%;
    }
    .coluna32 {
      padding-top: 64px;
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
    align-content: baseline;
    img {
      width: 50px;
      padding: 5px 4px;
    }
    flex-direction: column;
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
      justify-content: flex-end;
    }
    .rowMain {
      flex-direction: column-reverse;
    }
    .coluna3 {
      padding: 16px 0;
      h2 {
        font-size: 24px;
        line-height: 32px;
      }
    }
    .coluna3 img {
      max-width: 270px;
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
`
