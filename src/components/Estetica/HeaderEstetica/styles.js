import styled from 'styled-components'

export const Contentor = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 10px;
  min-height: 100vh;

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
    min-height: 90vh;
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
    min-height: 70vh;
  }

  .col {
    padding: 0;
    p {
      padding: 0 1em;
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 16px;
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
    max-height: 150px;
    margin-bottom: 16px;
    img {
      padding: 20px 0;
      width: 50% !important;
    }
    margin-left: -16px;
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
      padding: 32px 32px 0 0;
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
    align-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    img {
      max-width: 50%;
      padding: 0 8px;
    }
    display: flex !important;
    flex-direction: row;
  }

  .coluna3 img {
    max-width: 350px;
  }
`
