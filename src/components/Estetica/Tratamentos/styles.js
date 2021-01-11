import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .ortholookContainer {
    margin-top: 50px;
    padding: 0;
    min-width: 90%;
    margin-left: 0px !important;
  }
  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 100px;
    margin: 0;
    padding: 0;
    background: url('/images/tratamentosBG.png') no-repeat;
    background-size: contain;
    background-position-x: left;
    margin-left: -32px;
  }

  .imgTratamento {
    width: 100%;
    margin-left: -16px;
  }
  .rowBtnTratamentos > .col {
    text-align: end;
  }

  .img {
    max-width: 100%;
  }

  @media (max-width: 900px) {
    .pacientes h5 {
      font-size: 14px !important;
    }
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .ortholookContainer {
      padding: 16px !important;
    }
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }
  }
`
