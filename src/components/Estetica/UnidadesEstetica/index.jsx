import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const UnidadesEstetica = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadeES(1).png')

  return (
    <Contentor>
      <Container>
        <Row className="rowMain">
          <Row className="linhaSinuosaTratamentos">
            <br></br>
          </Row>
          <Col className="coluna1">
            <h4>
              As clínicas Ortolook Estética estão localizadas no estado do Rio
              de Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <img
              src={imgUrl}
              alt="Tratamento Específico"
              className="imagemEstetica"
            />
          </Col>
          <Col className="coluna3">
            <button onClick={() => setImgUrl('images/unidadeES(3).png')}>
              <p>Botafogo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(4).png')}>
              <p>Caxias II</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(7).png')}>
              <p>Leblon</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(5).png')}>
              <p>Madureira</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(8).png')}>
              <p>Niterói</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(6).png')}>
              <p>Nova Iguaçu</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeES(2).png')}>
              <p>São Gonçalo</p>
            </button>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default UnidadesEstetica
