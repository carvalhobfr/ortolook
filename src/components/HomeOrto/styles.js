import styled from 'styled-components'

export const Contentor = styled.div`
  body {
    margin: auto;
  }
  .container {
    background-image: url(images/home2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: left;
    height: 100vh;
    margin: 0;
    padding: 0;
    left: 0;
    max-width: 2000px;
    max-height: 1200px;
  }
  .contentor,
  .row {
    width: 99vw;
    height: 100vh;
  }
  span {
    width: 50%;
    cursor: pointer;
  }

  .col,
  .link {
    height: 100%;
    width: 50%;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .container {
      background-image: url(images/homeMobile.png) !important;
    }
    .row {
      flex-direction: column;
    }
    .col {
      width: 100%;
    }
  }
`
