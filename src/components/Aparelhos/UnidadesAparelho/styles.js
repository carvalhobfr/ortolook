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
  .ortholookContainer {
    margin-top: 50px;
    padding: 32px;
    min-width: 100%;
    margin-left: 0px !important;
    h1 {
      font-family: Bemio Italic;
      font-style: italic;
      font-weight: normal;
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
  }

  .custom-tag,
  .carousel.slide {
    min-width: 100%;
  }

  .carousel-item img {
    max-width: 100%;
  }

  @media (min-width: 1000px) {
    .colTratamentos {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
    }
  }
  @media (max-width: 900px) {
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
    }
    .saibaNossosPrecos {
      margin-top: 30px;
    }
  }
`
