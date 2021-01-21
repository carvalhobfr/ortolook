import React from 'react'

import { Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const FooterAparelho = () => {
  return (
    <Contentor>
      <Row className="rowFooter">
        <Col className="colFooter">
          <Row>
            <img src="images/ortoFooter1.png" alt="Logo Ortolook" />
            <img src="images/ortoFooter2.png" alt="Logo Ortolook" />
            <img src="images/ortoFooter3.png" alt="Logo Ortolook" />
          </Row>
        </Col>
        <Col className="col2Footer">
          <Row>
            <img src="images/ortoFooter4.png" alt="Logo Ortolook" />
            <a href="https://www.instagram.com/ortolook/">
              <img src="images/ortoFooter5.png" alt="Logo Ortolook" />
            </a>
            <a href="https://www.facebook.com/Ortolook/">
              <img src="images/ortoFooter6.png" alt="Logo Ortolook" />
            </a>
          </Row>
        </Col>
        {/* <Col className="col3Footer">
          <Row>
            <a href="https://www.instagram.com/ortolook/">
              <img src="images/ortoFooter5.png" alt="Logo Ortolook" />
            </a>
            <a href="https://www.facebook.com/Ortolook/">
              <img src="images/ortoFooter6.png" alt="Logo Ortolook" />
            </a>
          </Row>
        </Col> */}
      </Row>
    </Contentor>
  )
}

export default FooterAparelho
