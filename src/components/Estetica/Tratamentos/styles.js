import styled from 'styled-components'

export const Contentor = styled.div`
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
    margin-top: 50px;
    padding: 0;
  }
  .ortolookContainer {
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
    width: 90%;
    margin-left: -16px;
  }
  .rowBtnTratamentos > .col {
    text-align: end;
  }

  .img {
    max-width: 100%;
  }

  .imgTratamento {
    width: 90%;
    margin-left: -16px;
  }

  @media (max-width: 900px) {
    .pacientes h5 {
      font-size: 14px !important;
    }
    .imgTratamento {
      width: 100%;
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
    .ortolookContainer {
      padding: 0px !important;
    }
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
  }
`
