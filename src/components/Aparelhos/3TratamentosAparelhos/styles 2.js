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
    padding: 32px 0;
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

  /*   .carousel-item img {
    max-width: 100%;
  } */
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
      max-height: 500px;
      min-height: 50vh;
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
      font-family: 'GothamBook';
      text-align: start;
      font-weight: 800;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
    }
  }
  .colTratamentos img {
    padding: 8px 0;
  }
  .openMobile.imgColunaTratamento.col img {
    padding: 10px;
    margin: 20px 0;
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
    padding-left: 32px;
    width: 100%;
    margin: auto;
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

    .carousel-control-next,
    .carousel-control-prev {
      margin: 0 -10px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      display: none;
    }
    .ortolookContainer {
      margin-top: 0px !important;
    }
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        .ortolookContainer {
          min-height: 3900px;
        }
      }
    }
  }
  @media (min-width: 900px) {
    .colTratamentos {
      max-height: 70vh;
      max-width: 20vw;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      background-image: url(images/setaAparelho.png);
    }
    .carousel-item > img,
    .imgColunaTratamento > img {
      max-width: 320px;
      max-height: 464px;
    }
    .colTratamentos img {
      padding: 8px 0;
      /* max-width: 320px; */
    }
  }
  .carousel,
  .carousel-item > img {
    margin-bottom: 0 !important;
  }

  .colunaAgende {
    max-width: 250px;
    margin: 0;
    padding: 0;
  }
`
