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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
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
    max-height: 150px;
    margin-bottom: 16px;
    img {
      padding: 20px 0;
      width: 50% !important;
    }
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
    min-width: 350px;
  }
  .redesSociais {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    img {
      max-width: 100%;
    }
  }

  .coluna1,
  .coluna3,
  .coluna3 .someMobile {
    display: -ms-grid;
    display: grid;
    /* margin-top: 16px; */
  }

  .coluna1 button,
  .coluna3 button {
    text-align: center;
  }

  @media (max-width: 900px) {
    .coluna3 {
      min-height: 120px;
    }
  }

  .coluna1 button {
    text-align: start;
  }
  .coluna3 button {
    text-align: end;
  }

  @media (max-width: 900px) {
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
    }
    .coluna1 {
      min-height: 500px;
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
      display: -ms-grid !important;
      display: grid !important;
    }
    .coluna3 .someMobile {
      margin-top: -64px;
    }
    .coluna3 img {
      padding: 32px 32px 0 0;
    }
    .redesSociais {
      max-width: 20%;
    }
    .colunaLogo {
      min-width: 80%;
    }
  }

  .coluna3 div {
    min-height: 200px;
  }
`
