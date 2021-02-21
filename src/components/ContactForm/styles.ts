import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 789px;
  padding: 64px 32px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  justify-content: center;
  background-image: url(images/bgContato.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 48px;
    color: #fff;
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
  }

  button {
    margin-top: 32px;
    padding-top: 10px;
    font-family: Gotham !important;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 70px;
    color: #fff !important;
    background-image: url(images/bgEnviarForm.png) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: top !important;
  }
`
