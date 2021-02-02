import styled from 'styled-components'

export const Contentor = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0px;
  min-height: 90vh;
  font-family: 'GothamBook';
  font-weight: 900;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    min-width: 100%;
  }

  .col {
    padding: 0;
    p {
      font-family: 'Gotham Pro', sans-serif;
      padding: 0 1em;
      font-style: normal;
      font-weight: 300;
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
    cursor: pointer;
    z-index: 1;
  }
  .coluna3 {
    text-align: end;
    h2 {
      font-family: 'Gotham Pro', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 48px;
      text-align: right;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      padding-right: 18px;
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

  .redesSociais {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    img {
      max-width: 100%;
      padding: 0 8px;
    }
  }

  .fotoHeader {
    margin-top: -60px;
    /* max-height: 710px; */
    max-width: 3585px;
    margin-left: 10%;
  }
  .fotoHeader2 {
    max-height: 673px;
    max-width: 400px;
    -ms-flex-item-align: end;
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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: end;
      -ms-flex-line-pack: start;
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
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .coluna3 img {
      padding: 32px 0;
      text-align: center;
    }
    .redesSociais {
      max-width: 20%;
      -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
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
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: baseline;
    align-content: baseline;
    img {
      width: 35px;
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
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      max-width: 90vw;
    }
    .rowMain {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
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
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: end;
    align-content: end;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @media (max-width: 1200px) {
      .coluna3 {
        min-height: 500px;
      }
      .coluna32 {
        min-height: 150px;
      }
      .rowMain {
        min-height: 50vh;
      }
    }
  }

  @media (min-width: 900px) {
    .rowMain {
      min-height: 90vh;
    }
    .coluna3.col {
      align-content: space-between;
      justify-content: space-between;
      max-height: 80vh;
    }
    .gkbuWj .coluna3 img {
      max-width: 400px;
    }
    .fotoHeader {
      max-width: 360px !important;
      width: 100%;
      max-height: 70vh;
    }
  }
  @media (max-width: 500px) {
    height: 90vh;
    min-height: 400px;
    max-height: 650px;
  }
`
