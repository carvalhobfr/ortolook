import styled from 'styled-components'

export const Contentor = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0px;
  margin-top: 60px;

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
    min-width: 99vw;
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
      font-family: 'Gotham';
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 61px;
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

  .fotoHeader {
    margin-top: -60px;
    /* max-height: 710px; */
    max-width: 500px;
    margin-left: 10%;
  }
  .fotoHeader2 {
    max-height: 673px;
    max-width: 552px;
    align-self: flex-end;
    z-index: 2;
  }

  button,
  a,
  .link {
    cursor: pointer !important;
  }

  @media (max-width: 1100px) {
    strong {
      font-size: 48px !important;
      line-height: 52px !important;
    }
  }
  @media (max-width: 700px) {
    strong {
      font-size: 28px !important;
      line-height: 28px !important;
    }
    .ortholookContainer h1 {
      font-size: 32px !important;
      line-height: 36px !important;
    }
    .fotoHeader {
      max-height: 500px;
    }
  }
`
