import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .ortolookContainer {
    margin-top: 50px;
    padding: 0;
    min-width: 90%;
    margin-right: 0px !important;
  }
  .ortolookContainer2.row {
    padding: 0 32px;
  }
  .saibaNossosPrecos {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .linhaSinuosaDepoimento {
    min-width: 100%;
    min-height: 80px;
    margin: 0;
    padding: 0;
    background: url('/images/depoimentosBG.png') no-repeat;
    background-size: contain;
    background-position-x: right;
  }
  .carousel-item {
    text-align: center;
    margin-top: 32px;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-image: url(images/setaDir.png);
    height: 16px;
    width: 16px;
  }
  .carousel-control-next,
  .carousel-control-prev {
    width: 10%;
  }
  .carousel-control-prev-icon {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .carrosselPC img {
    max-width: 65%;
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex !important;
    }
    .ortolookContainer2 {
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
  }
  h1 {
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
      text-align: end;
    }
  }

  .linhaDepo {
    margin-top: 0;
    text-align: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  .colunaDepo {
    max-width: 300px;
    padding: 16px;
    margin: 0 5vh;
    text-align: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
    h3 {
      font-family: 'Gotham';
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 27px;
      letter-spacing: -0.05em;

      color: #802b67;
    }
    h5 {
      font-family: Gotham;
      font-family: 'Gotham';
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 10px;

      letter-spacing: -0.05em;

      color: #3a3a3a;
    }
    p {
      font-family: 'Gotham';
      margin-top: 14px;
      font-family: Gotham;
      font-weight: normal;
      font-weight: 200 !important;
      font-size: 24px;
      line-height: 23px;
      letter-spacing: -0.05em;

      color: #3a3a3a;
    }
  }
`
