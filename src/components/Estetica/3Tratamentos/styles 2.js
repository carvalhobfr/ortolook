import styled from 'styled-components'

export const Contentor = styled.div`
  .ortolookContainer {
    margin-top: 30px;
    padding: 0;
    min-width: 100%;
    margin-left: 0px !important;
  }
  .row {
    margin: 32px 0;
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
    padding: 0;
    /* img {
      max-width: 150px;
    } */
  }
  /* .ortolookContainer {
    margin-top: 50px;
    padding: 0;
    min-width: 90%;
    margin-left: 0px !important;
  } */
  .linhaSinuosaTratamentos {
    min-width: 100%;
    min-height: 80px;
    margin: 0;
    padding: 0;
    background: url('/images/tratamentosBG.png') no-repeat;
    background-size: contain;
    background-position-x: left;
    margin-left: -32px;
  }

  .imgTratamento {
    margin-left: -16px;
    max-height: 300px;
  }
  .rowBtnTratamentos > .col {
    text-align: center;
    max-width: 250px;
  }

  @media (max-width: 900px) {
    .pacientes h5 {
      font-size: 14px !important;
    }
    .imgTratamento {
      height: 422px;
      width: 350px;
      max-height: 600px;
    }
  }

  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }

    .someMobile {
      display: none;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    /* .ortolookContainer {
      padding: 0px !important;
    } */
    .button {
      width: 250px;
    }
    .rowBtnTratamentos .col {
      min-width: 114px;
      max-width: 114px;
      padding: 0;
    }
    .rowBtnTratamentos {
      justify-content: center;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
    button,
    button > img {
      height: 42px;
      padding: 8px;
    }
  }

  .ortolookContainer {
    padding: 32px 0px !important;
  }

  @media (max-width: 900px) {
    .ortolookContainer {
      padding: 16px 0 !important;
    }
    .linhaSinuosaTratamentos.row {
      margin-right: 16px;
    }
    .rowBtnTratamentos .col button {
      min-width: 100%;
      padding: 0;
    }
    .rowBtnTratamentos > .col > button > img {
      height: 23px;
      padding: 2px;
    }
  }
  @media (min-width: 900px) {
    .mainRow {
      min-height: 50vh;
      .imgTratamento {
        margin-left: -16px;
        max-height: 50vh;
      }
    }
  }
`
