/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
max-width:2000px;
  testeDiv {
    margin-top: 40px;
  }

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
      display: flex;
    }
    .ortholookContainer {
      padding: 16px !important;
    }
  }
  @media (min-width: 900px) {
    .openMobile {
      display: none !important;
    }
  }

  .redesSociais {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    max-width: 100%;
  }
`
