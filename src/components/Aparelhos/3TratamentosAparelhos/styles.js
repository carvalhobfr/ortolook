import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 0;
  }
  .ortolookContainer {
    margin-top: 50px;
    padding: 32px;
    min-width: 100%;
    margin-left: 0px !important;
    h1 {
      font-weight: 900 !important;
      font-size: 80px;
      line-height: 98px;
      text-align: right;
      letter-spacing: -0.05em;
      text-transform: uppercase;

      color: #802b67;
    }
  }
  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 100px;
    margin: 0;
    padding: 0;
    background: url('/images/tratamentosBG.png') no-repeat;
    background-size: contain;
    background-position-x: left;
  }

  .tratamentoAparelho {
    max-height: 70px;
    max-width: 100%;
  }

  .custom-tag,
  .carousel.slide {
    min-width: 100%;
  }

  .carousel-item img {
    max-width: 100%;
  }
  .carousel-item {
    text-align: center;
  }

  @media (max-width: 900px) {
    .ortolookContainer {
      margin-top: 0px !important;
    }
    .rowTratamentos {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
    }
    .colTratamentos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-height: 700px;
    }
    .saibaNossosPrecos {
      margin-top: 50px;
      width: 80%;
    }
  }

  .agendeAqui {
    margin-right: -32px;
  }

  .openMobile {
    display: none !important;
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none !important;
    }
    .openMobile {
      display: flex !important;
    }
    .imgColunaTratamento {
      flex-direction: column;
      align-items: center;
      img {
        padding: 16px 0;
      }
    }
    .ortolookContainer {
      padding: 16px !important;
    }
  }

  @media (min-width: 900px) {
    .openMobile {
      display: none;
    }
    .someMobile {
      display: flex !important;
    }
  }

  .ortolookContainer h1 {
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
  }

  @media (max-width: 900px) {
    strong {
      font-size: 32px !important;
      line-height: 36px !important;
    }
    .ortolookContainer h1 {
      font-size: 32px !important;
      line-height: 36px !important;
      text-align: end;
    }
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
      align-items: center;
    }
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }
    .rowPacientes {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    .pacientes {
      padding: 16px 0;
    }
    p {
      font-family: 'Gotham';
      text-align: start;
      font-weight: 800;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
    }
  }
  .colTratamentos img {
    padding: 24px 0;
  }
  .openMobile.imgColunaTratamento.col img {
    padding: 10px;
    margin: 20px 0;
  }

  .carousel-item > img,
  .imgColunaTratamento > img {
    max-width: 320px;
  }
  .colTratamentos {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly !important;
    max-width: 300px;
  }
  .rowTratamentos {
    align-content: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }
  .carousel-control-next-icon {
    background-image: url(images/setaAparelho.png);
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-image: url(images/setaAparelho.png);
  }

  .carousel-control-prev-icon {
    transform: rotate(180deg);
  }
  .colCarrossel {
    max-width: 600px;
  }
  .ortolookContainer > .row {
    width: 100%;
  }
  @media (max-width: 900px) {
    /* min-height: 4800px; */
    .ortolookContainer {
      margin-top: 0px !important;
      min-height: 4800px;
    }
  }
`
