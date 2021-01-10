import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .ortholookContainer {
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
