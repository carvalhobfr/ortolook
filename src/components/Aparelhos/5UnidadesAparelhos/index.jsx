import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const UnidadesAparelho = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadesAP(9).png')
  const [imgUrlMob, setImgUrlMob] = useState(
    <img
      loading="lazy"
      src="images/unidadeAPRMob4.png"
      alt="Tratamento Específico"
      className="imagemEstetica semMarginEsq"
    />
  )

  return (
    <Contentor id="unidades">
      <Container>
        <Row className="rowMain ">
          <Row className="rowUnidades">
            <h1 className="bemioItalic">UNIDADES</h1>
          </Row>
          <Col className="coluna1 gothamBook someMobile">
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
          <Col className="coluna1 openMobile">
            <h4>
              As clínicas Ortolook Estética estão localizadas no estado do Rio
              de Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <Row className="linhaCarrossel">
              <Col className="imagemUnidadeMob">{imgUrlMob}</Col>
              <Col className="coluna4 openMobile">
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob1.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Alcantara</p>
                </button>
                {/* <button
        onClick={() =>
          setImgUrlMob(
            <img
              loading="lazy"
              src="images/unidadeAPRMob2.png"
              alt="Tratamento Específico"
              className="imagemEstetica semMarginEsq"
            />
          )
        }
      >
        <p>Bangu</p>
      </button> */}
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob3.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Botafogo</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob4.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Caxias I</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob5.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Caxias II</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob6.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Copacabana</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob7.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Leblon</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob8.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Madureira</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob9.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Niterói</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob10.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Nova Iguaçu</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob11.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>São Gonçalo</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob12.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>São João</p>
                </button>
                <button
                  onClick={() =>
                    setImgUrlMob(
                      <img
                        loading="lazy"
                        src="images/unidadeAPRMob13.png"
                        alt="Tratamento Específico"
                        className="imagemEstetica semMarginEsq"
                      />
                    )
                  }
                >
                  <p>Petrópolis</p>
                </button>
              </Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
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
