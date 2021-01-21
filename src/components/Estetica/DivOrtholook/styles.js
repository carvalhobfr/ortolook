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
    margin-right: -16px;
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
    font-size: 24px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #802b67;
  }
  p {
    font-family: 'Gotham';
    text-align: start;
    font-weight: 800;
    font-size: 36px;
    line-height: 34px;
    color: #802b67;
  }
  .pacientes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 415px;
  }

  @media (max-width: 900px) {
    h5 {
      font-size: 13px !important;
      line-height: 13px;
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

  .linhaSinuosa {
    min-width: 100%;
    min-height: 80px;
    margin: 0;
    padding: 0;
    background: url('/images/sinuosaBG3.png') no-repeat;
    background-size: contain;
    background-position-x: right;
    margin-top: 64px;
    margin-right: -16px !important;
  }

  @media (max-width: 900px) {
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
    }
    .pacientes {
      padding: 16px;
      /* width: 200px; */
      min-width: 155px;
      max-width: 157px;
      min-height: unset;
    }
    .row {
      margin: 16px 0;
    }
  }
`
