import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;
  min-height: 100vh;

  .container {
    min-width: 100%;
    min-height: 85vh;
    max-height: 900px;
    width: 100%;
    margin: 0;
    margin-top: 16px;
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
    min-height: 65vh;
    max-height: 70vh;
  }

  .col {
    padding: 0;
    p {
      font-family: 'Gotham Pro', sans-serif;
      padding: 0 1em;
      font-style: normal;
      font-weight: 500;
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
    margin: 1em auto auto;
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
    .rowMain {
      min-height: 550px;
      flex-wrap: wrap-reverse;
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
      padding: 16px 32px 0 0;
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
      max-width: 35px;
      width: 35px;
      max-height: 35px;
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
      align-items: end;
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
      .coluna1 {
        min-height: 150px;
      }
    }
  }
  /* @media (max-width: 500px) {
    .coluna3.col {
      font-size: 14px;
      max-height: 80px !important;
      min-height: 80px !important;
    }
    .col p {
      padding: 0;
      margin: 0 !important;
      line-height: 12px;
    }
    .imagemEstetica {
      max-height: 250px;
    }
    .coluna3 img {
      max-width: 250px;
    }
    .coluna1 {
      max-height: 250px;
    }
    .rowMain {
      min-height: 500px;
      max-height: 500px;
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
  } */

  @media (max-width: 1200px) {
    max-height: 80vh;
    .openMobile {
      .rowUpgrade {
        margin: 0 auto;
        min-height: 5vh;
        max-height: 10vh;
        padding: 8px 32px;
        max-width: 50%;
        img {
          width: 50%;
          max-width: 300px;
          min-width: 150px;
          margin: auto;
        }
      }
      .col,
      .col img {
        max-height: 50vh !important;
      }
    }

    .pageMobile {
      height: 95vh;
      max-height: 1520px;
      max-width: 100vw;
      justify-content: end;
      padding: 0;
      .row {
        max-width: 100vw;
        margin: 0;
      }
    }

    .colTratamentos {
      display: FLEX;
      flex-direction: COLUMN;
      justify-content: SPACE-BETWEEN;
      text-align: end;
      padding: 16px 0px;
    }
    .linkTratamentos {
      width: 50%;
      margin-top: 3vh;
      img {
        width: 100%;
        max-width: 250px;
        padding: 4px 0;
      }
    }
    .linkTratamentos2 {
      width: 50%;
      margin-top: 3vh;
      display: flex;
      flex-direction: column;
      align-items: flex-end !important;
      justify-content: flex-end;
      margin-right: 0;
      img {
        max-width: 100%;
        max-width: 150px;
        padding: 4px;
      }
      .sociais {
        width: 30px;
        height: 30px;
      }
    }
  }
  .coluna1,
  .coluna3 {
    button {
      img {
        max-width: 250px !important;
        padding: 0 16px;
      }
    }
  }
`
