import styled from 'styled-components'

export const Contentor = styled.div`
  /* margin-top: 30px; */
  border-top: 1px solid lightgray;
  padding: 16px 0 8px;
  .container {
    max-width: 1800px;
  }
  img {
    /* max-width: 177px; */
    max-height: 32px;
  }
  p {
    font-style: normal;
    font-weight: 600 !important;
    font-size: 12px;
    line-height: 11px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #802b67;
    margin: 0 auto;
  }
  strong {
    font-weight: 900 !important;
  }
  .col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`
