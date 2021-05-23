import styled from 'styled-components'

export const Contentor = styled.div`
  /* margin-top: 30px; */
  border-top: 1px solid lightgray;
  padding: 8px 0 8px;
  max-width: 99vw;
  margin: auto;
  .rowFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .col2Footer {
    display: flex;
    justify-content: flex-end;
  }

  .rowFooter .col:first-child img {
    height: 13px;
    /* min-height: 12px; */
    padding: 0px 8px;
  }
  .col2Footer .row {
    align-items: center;
    flex-wrap: nowrap;
  }

  .rowFooter .col:nth-child(2) a img:nth-child(2),
  .rowFooter .col:nth-child(2) a img:nth-child(3) {
    max-height: 20px;
    min-height: 14px;
    padding: 2px 6px;
    align-items: center;
  }
  .rowFooter .col:nth-child(2) img:nth-child(1) {
    max-height: 30px;
    min-height: 30px;
    padding: 2px 8px;
    align-items: center;
  }

  @media (max-width: 700px) {
    .rowFooter {
      display: flex;
      flex-direction: column;
    }
  }

  .col3Footer {
    display: none;
  }

  a {
    display: flex;
  }
  a img {
    padding: 0 2px !important;
  }

  @media (max-width: 868px) {
    .rowFooter {
      flex-direction: column;
      justify-content: center;
    }
    .col2Footer,
    .colFooter .row {
      padding: 2px;
      justify-content: center;
    }
  }
  @media (max-width: 500px) {
    .col2Footer .row {
      flex-direction: row;
      padding: 2px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 16px;
    }
    .rowFooter {
      min-height: 10vh;
    }
    a img {
      padding: 2px !important;
      min-width: 25px;
      min-height: 25px;
    }
  }
  .croIMG {
    min-height: 13px !important;
    max-height: 14px !important;
  }
`
