import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html{
  display:flex;
}
  body {
    max-width: 2000px;
    font-family: 'Gotham';
    font-weight: normal;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 700;
  line-height: 1.2;
}

button, a , .link {
  cursor: pointer;
}

#__next{
  width: 99vw;
  max-width: 100%;
}

disabled{
  cursor: not-allowed
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
`
