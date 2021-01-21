/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`

max-width:2000px;

  button {
    border: none !important;
    outline: 0 !important;
    cursor: pointer !important;
    overflow: visible !important;
    color: inherit !important;
    background: transparent !important;
  }

  button:focus {
    outline: 0 !important;
  }
  @media (max-width: 900px) {
    .someMobile {
      display: none;
    }
    .openMobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .ortolookContainer {
      padding: 16px !important;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
  }

  .redesSociais {
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
  }

  img{
    max-width: 100%;
  }

`
