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
  font-family: 'Gotham Pro', sans-serif;
  font-weight: normal;

  a {
    z-index: 1400;
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
  background-image: url(images/bgContato2.png);
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  @media (max-width: 600px) {
    background-size: 100%;
    background-image: url(images/bgContatoMob.png);
  }
  button {
    margin-top: 32px;
    padding: 10px 0 0 0;
    font-family: Gotham !important;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #fff !important;
    /*     background-image: url(images/bgEnviarForm2.png) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;*/
    border: none;
    background-color: transparent;
  }

  h1 {
    font-family: 'Gotham Pro', Gotham, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 28px;
    color: #fff;
  }

  p {
    font-family: 'Gotham Pro', Gotham, sans-serif;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    line-height: 19px;
    max-width: 400px;
    min-width: 250px;
    padding: 10px;
    margin: 0;
    background-image: url(images/bgEnviarForm.png) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    border: none;
    background-color: transparent;

    color: #ffffff;
  }

  input,
  textarea {
    background: #ffffff;
    border-radius: 10px;
    margin: 8px;
    padding: 8px;
    max-width: 90%;
    border: 1px solid transparent;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 250px;
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
    margin: 0;
  }
`
