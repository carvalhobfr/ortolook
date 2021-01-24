/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`

max-width: 1900px !important;
margin: auto;
padding: 0;
  @font-face {
    font-family: 'Gotham';
    src: url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot');
    src: url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.eot?#iefix')
        format('embedded-opentype'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff2')
        format('woff2'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.woff')
        format('woff'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.ttf')
        format('truetype'),
      url('//db.onlinewebfonts.com/t/edc378fa3251080c5b508b220462efca.svg#Gotham')
        format('svg');
  }

  @font-face {font-family: "Bemio Italic"; src: url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.eot"); src: url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.woff") format("woff"), url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/ed524d3938b150b70d120697d516e805.svg#Bemio Italic") format("svg"); }

  font-family: 'Gotham', sans-serif;

max-width:2000px;

.bemioItalic{
  font-family: "Bemio Italic" !important;
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

  .saibaNossosPrecos img{
    width: 250px;
  }


  @media (max-width: 900px) {
    .agendeAqui  img ,.saibaNossosPrecos img{
    width: 200px !important;
    cursor: pointer;
  }
  }

`
