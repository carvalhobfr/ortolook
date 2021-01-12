import styled from 'styled-components'

export const Contentor = styled.div`
  .row {
    margin: 32px 0;
  }
  .ortolookContainer {
    margin-top: 50px;
    padding: 32px;
    min-width: 100%;
    margin-right: 0px !important;
  }
  .ortolookContainer2 {
    /* max-width: 300px; */
    margin-top: 50px;
    padding: 32px;
    margin-right: 0px !important;
    /* width: 50%; */
    text-align: end;
  }
  .saibaNossosPrecos {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
    padding: 0;
  }
  .linhaSinuosaDepoimento {
    margin: 0;
    padding: 0;
    background-size: contain;
    text-align: end;
    max-width: 100%;
  }
  .carousel-item {
    text-align: center;
    margin-top: 32px;
  }
  .carousel-control-next-icon {
    background-image: url(images/setaDir.png);
    height: 32px;
    width: 32px;
  }
  .carousel-control-prev-icon {
    background-image: url(images/setaDir.png);
    height: 32px;
    width: 32px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .openMobile img {
    max-width: 80%;
    max-height: 350px;
  }
`
