import styled from 'styled-components'

export const Contentor = styled.div`
  body {
    margin: auto;
  }

  .container {
    height: 100vh;
    margin: 0;
    padding: 0;
    left: 0;
    max-width: 2000px;
    max-height: 1200px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
  }
  .contentor {
    width: 99vw;
    height: 100vh;
  }

  .link {
    cursor: pointer;
  }

  .homeOrto {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1250px;
    height: 100%;
    max-height: 300px;
  }

  .homeOrto img {
    max-width: 100%;
    padding: 16px 0px;
  }
  .cliqueAqui {
    padding-top: 0px !important;
  }

  .logoCol2 {
    width: 30% !important;
  }

  .homeOrto {
    margin: auto !important;
    display: flex;
    align-self: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  .logoCol2 {
    background: url(images/logoOrtolookHome2.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    max-height: 220px;
    max-width: 30%;
    margin-bottom: 10px;
    width: 100% !important;
    margin-left: 0px;
    display: flex;
    flex-direction: row;
  }

  .link,
  .linkAparelhos {
    cursor: pointer;
  }

  .linkAparelhos {
    height: 50%;
    width: 50%;
  }

  @media (max-width: 1150px) {
    .homeOrto {
      width: 100%;
      flex-direction: column;
    }
    .logoCol {
      height: 0px !important;
      max-height: 0px;
    }
    .someMobile {
      display: none;
    }
    .openMobile {
      display: flex;
    }
    .logoCol2 {
      display: flex;
      flex-direction: column !important;
      background: url(images/logoOrtolookHomeMobile2.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 300px;
      max-height: 520px;
      height: 100%;
      max-width: 100%;
      margin-bottom: 0px;
      display: flex;
      flex-direction: row;
      justify-items: flex-end;
      align-items: flex-end;
    }
    .linkAparelhos {
      min-width: 50%;
      min-height: 40%;
      height: 40%;
      width: 50%;
    }
  }
  @media (min-width: 1150px) {
    .homeOrto {
      flex-wrap: nowrap;
    }
    .someMobile {
      display: flex;
    }
    .openMobile {
      display: none;
    }
    .row {
      align-items: center;
    }
  }
  .logoCol {
    max-width: 60%;
  }

  @media (max-width: 868px) {
    .container {
      max-height: 82vh;
    }
  }
  @media (max-width: 500px) {
    .container {
      height: 90vh !important;
    }
  }
`
