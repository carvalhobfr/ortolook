import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .ortolookContainer {
    padding: 32px;
    min-width: 100%;
    margin-right: 0px !important;
    min-height: 100vh;
    h1 {
      /* font-family: Bemio Italic; */
      font-style: normal;
      font-weight: 900;
      font-size: 80px;
      line-height: 98px;

      text-align: right;
      letter-spacing: -0.05em;
      text-transform: uppercase;
    }
  }
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .linhaSinuosa {
    min-width: 100%;
    min-height: 100px;
    margin: 0;
    padding: 0;
    background: url('/images/sinuosaBG2.png') no-repeat;
    background-size: contain;
    background-position-x: right;
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
    font-weight: 500;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #802b67;
  }
  p {
    text-align: start;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #802b67;
  }
  .pacientes {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 415px; */
    min-width: 30%;
    padding: 16px;
    img {
      /* min-height: 130px; */
      max-width: 250px;
    }
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
      text-align: start;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
    }
  }

  .textoBio {
    margin: 0px;
  }

  @media (max-width: 900px) {
    h5 {
      font-size: 13px !important;
      line-height: 13px;
    }
    p {
      text-align: start;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #802b67;
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
      padding: 16px !important;
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
      height: 100%;
    }
    .pacientes {
      padding: 8px;
      /* width: 200px; */
      min-width: 35%;
      min-height: unset;

      img {
        max-width: 80%;
      }
    }
    .row {
      margin: 16px 0;
    }
  }
`
