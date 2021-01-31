import React from 'react'

import { Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const FooterAparelho = () => {
  return (
    <Contentor>
      <Row className="rowFooter">
        <Col className="colFooter">
          <Row>
            <img
              loading="lazy"
              src="images/ortoFooter1.png"
              alt="Logo Ortolook"
            />
            <img
              loading="lazy"
              src="images/ortoFooter2.png"
              className="footer11px"
              alt="Logo Ortolook"
            />
            <img
              loading="lazy"
              src="images/ortoFooter3.png"
              className="footer11px2 someMobile"
              alt="Logo Ortolook"
            />
            <a
              className="openMobile"
              href="https://www.instagram.com/ortolook/"
            >
              <img
                loading="lazy"
                src="images/ortoFooter5.png"
                alt="Logo Ortolook"
              />
            </a>
            <a className="openMobile" href="https://www.facebook.com/Ortolook/">
              <img
                loading="lazy"
                src="images/ortoFooter6.png"
                alt="Logo Ortolook"
              />
            </a>
          </Row>
        </Col>
        <Col className="col2Footer">
          <Row>
            <img
              className="croIMG"
              loading="lazy"
              src="images/ortoFooter4.png"
              alt="Logo Ortolook"
            />
            <a
              className="someMobile"
              href="https://www.instagram.com/ortolook/"
            >
              <img
                loading="lazy"
                src="images/ortoFooter5.png"
                alt="Logo Ortolook"
              />
            </a>
            <a className="someMobile" href="https://www.facebook.com/Ortolook/">
              <img
                loading="lazy"
                src="images/ortoFooter6.png"
                alt="Logo Ortolook"
              />
            </a>
          </Row>
        </Col>
        {/* <Col className="col3Footer">
          <Row>
            <a href="https://www.instagram.com/ortolook/">
               <img loading="lazy" src="images/ortoFooter5.png" alt="Logo Ortolook" />
            </a>
            <a href="https://www.facebook.com/Ortolook/">
               <img loading="lazy" src="images/ortoFooter6.png" alt="Logo Ortolook" />
            </a>
          </Row>
        </Col> */}
      </Row>
    </Contentor>
  )
}

export default FooterAparelho
