import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const UnidadesAparelho = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadesAP(9).png')

  return (
    <Contentor>
      <Container>
        <Row className="rowMain ">
          <Container className="ortolookContainer2 ">
            <h1 className="bemioItalic">UNIDADES</h1>
          </Container>
          <Col className="coluna1 gothamBook">
            <h4>
              As clínicas Ortolook Estética estão localizadas no estado do Rio
              de Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <img
              loading="lazy"
              src={imgUrl}
              alt="Tratamento Específico"
              className="imagemEstetica"
            />
          </Col>
          <Col className="coluna3 gothamBook">
            <button onClick={() => setImgUrl('images/unidadesAP(2).png')}>
              <p>Alcantâra</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(10).png')}>
              <p>Botafogo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(11).png')}>
              <p>Caxias I</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(1).png')}>
              <p>Caxias II</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(4).png')}>
              <p>Leblon</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(5).png')}>
              <p>Madureira</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(6).png')}>
              <p>Niterói</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(7).png')}>
              <p>Nova Iguaçu</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(3).png')}>
              <p>São Gonçalo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(8).png')}>
              <p>São João de Merití</p>
            </button>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default UnidadesAparelho
