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
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .linhaSinuosaDepoimento {
    min-width: 100%;
    min-height: 100px;
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
  .carousel-control-next-icon {
    background-image: url(images/setaDir.png);
    height: 32px;
    width: 32px;
  }
  .carousel-control-prev-icon {
    background-image: url(images/setaDir.png);
    height: 32px;
    width: 32px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .carrosselPC img {
    max-width: 80%;
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
    .linhaSinuosaDepoimento {
      min-height: 50px;
      margin-right: -16px;
    }
  }
`
