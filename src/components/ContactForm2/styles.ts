import styled from 'styled-components'

export const Container = styled.div`
  .modalForm {
    width: 100vw;
    margin: 0 !important;
    max-width: 1000px;
    .modal-content {
      width: 1000px;
      border: none !important;
      background: transparent;
    }
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 789px;
  padding: 128px 32px 64px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  justify-content: center;
  background-image: url(images/bgContato.png);
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  button {
    margin-top: 32px;
    padding-top: 10px;
    font-family: Gotham !important;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 32px;
    color: #fff !important;
    background-image: url(images/bgEnviarForm.png) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: top !important;
    border: none;
    background-color: transparent;
  }

  h1 {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 28px;
    color: #fff;
  }

  p {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    line-height: 19px;
    width: 70%;
    max-width: 400px;
    min-width: 250px;

    color: #ffffff;
  }

  input,
  textarea {
    background: #ffffff;
    border-radius: 18px;
    margin: 8px;
    padding: 8px;
    max-width: 90%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 300px;
  }

  .modalForm {
    width: 100vw;
    margin: 0 !important;
    max-width: 1000px;
  }
  .modal-content {
    border: none !important;
    background: transparent;
  }
  .modalTestDialog {
    border: none !important;
    background: transparent;
  }
`
