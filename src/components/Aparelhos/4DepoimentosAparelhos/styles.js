import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .ortolookContainer {
    margin-top: 50px;
    padding: 32px;
    min-width: 100%;
    margin-right: 0px !important;
  }
  .ortolookContainer2 {
    /* max-width: 300px; */
    margin-top: 50px;
    padding: 32px;
    margin-right: 0px !important;
    /* width: 50%; */
    text-align: start;
    padding-left: 0;
    min-height: 100px;
  }
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .linhaSinuosaDepoimento {
    margin: 0;
    padding: 0;
    background-size: contain;
    text-align: end;
    max-width: 100%;
  }
  .carousel-item {
    text-align: center;
    margin-top: 32px;
  }
  .carousel-control-next-icon {
    background-image: url(images/setaAparelho.png);
    height: 32px;
    width: 32px;
  }
  .carousel-control-prev-icon {
    background-image: url(images/setaAparelho.png);
    height: 32px;
    width: 32px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .openMobile img {
    max-width: 80%;
    max-height: 350px;
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
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
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

  img {
    max-height: 500px;
  }
`
