import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
import AgendaLateralDir from './../AgendaLateralDir'

const UnidadesAparelho = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadesAP(9).png')
  const [imgUrlMob, setImgUrlMob] = useState(
    <img
      loading="lazy"
      src="images/unidadeAPRMob1.png"
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
            <button
              className="botaoNossasUnidades"
              onClick={() =>
                setImgUrlMob(
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
                            src="images/unidadesMobileAP5.png"
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
                            src="images/unidadesMobileAP1.png"
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
                            src="images/unidadesMobileAP8.png"
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
                            src="images/unidadesMobileAP11.png"
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
                            src="images/unidadesMobileAP6.png"
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
                            src="images/unidadesMobileAP10.png"
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
                            src="images/unidadesMobileAP2.png"
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
                            src="images/unidadesMobileAP7.png"
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
                            src="images/unidadesMobileAP4.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        )
                      }
                    >
                      <p>Petrópolis</p>
                    </button>
                  </Col>
                )
              }
            >
              <br />
              <br />
              <br />
            </button>

            <Row className="linhaCarrossel">
              <Col className="imagemUnidadeMob">{imgUrlMob}</Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
            <button onClick={() => setImgUrl('images/unidadesAP5.png')}>
              <p>Alcantâra</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP1.png')}>
              <p>Botafogo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP2.png')}>
              <p>Caxias I</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP3.png')}>
              <p>Caxias II</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP6.png')}>
              <p>Leblon</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP7.png')}>
              <p>Madureira</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP8.png')}>
              <p>Niterói</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP9.png')}>
              <p>Nova Iguaçu</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP4.png')}>
              <p>São Gonçalo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(8).png')}>
              <p>Petrópolis</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadesAP(8).png')}>
              <p>São João de Merití</p>
            </button>
          </Col>
        </Row>
        <AgendaLateralDir />
      </Container>
    </Contentor>
  )
}

export default UnidadesAparelho
