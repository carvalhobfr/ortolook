import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 16px 0;
  }
  .ortolookContainer {
    margin-top: 0px;
    padding: 0;
    min-width: 100%;
    margin-right: 0px !important;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-around;
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

  h1 {
    font-weight: 900;
    font-size: 90px;
    line-height: 86px;
    text-align: right;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #802b67;
  }
  h5 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #802b67;
  }
  p {
    text-align: start;
    font-weight: 600;
    font-size: 26px;
    line-height: 28px;
    max-width: 50vw;
    color: #802b67;
    font-family: 'GothamBook';
  }
  .pacientes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 315px;
  }

  @media (max-width: 900px) {
    h5 {
      font-size: 13px !important;
      line-height: 13px;
    }
    p {
      font-family: 'Gotham Pro', sans-serif;
      text-align: start;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
    }
  }

  .linhaSinuosa {
    min-width: 100%;
    min-height: 80px;
    margin: 0;
    padding: 0;
    background: url('/images/sinuosaBG3.png') no-repeat;
    background-size: contain;
    background-position-x: right;
  }

  .ortolookContainer {
    padding: 32px 0 32px 32px !important;
  }

  @media (max-width: 900px) {
    .pacientes.col img {
      max-width: 150px;
    }
    .someMobile {
      display: none;
    }
    .saibaNossosPrecos img {
      margin-right: -32px;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .ortolookContainer {
      padding: 16px 0 16px 16px !important;
    }
    .linhaSinuosaTratamentos {
      min-height: 50px;
    }
    .rowPacientes {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .pacientes {
      padding: 16px;
      /* width: 200px; */
      min-height: unset;
    }
    .row {
      margin: 16px 0;
    }
  }
  .pacientes img {
    max-width: 250px;
  }
  .rowPacientes {
    width: 100%;
  }

  h5 {
    margin-top: 16px;
  }

  .pacientes {
    padding: 16px 16px;
    margin: 16px 16px;
    /* width: 200px; */
    min-height: unset;
  }

  @media (min-width: 900px) {
    .pacientes1 {
      align-items: flex-start;
      div {
        align-items: center;
        justify-content: space-between;
      }
    }
    .pacientes3 {
      align-items: flex-end;
      div {
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 900px) {
    .pacientes.col {
      min-width: 30%;
      max-width: 30%;
      margin: 3px;
      img {
        max-width: 100%;
      }
    }
    h5 {
      font-size: 10px !important;
      line-height: 12px;
    }
    .agendeAqui {
      align-self: baseline;
    }
    .pacientes {
      padding: 8px 16px;
    }
  }

  .pacientes > div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`
