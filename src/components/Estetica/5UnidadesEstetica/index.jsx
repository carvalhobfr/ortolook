import React, { useState, Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
// import AgendaLateralEsq from '../AgendaLateralEsq'

const UnidadesEstetica = () => {
  const [imgUrl, setImgUrl] = useState('images/unidadeESR(2).png')
  const [imgUrlMob, setImgUrlMob] = useState(
    <Col className="coluna4 openMobile">
      <button
        onClick={() =>
          setImgUrlMob(
            <img
              loading="lazy"
              src="images/unidadeESRMob(4).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(5).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(2).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(8).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(3).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(6).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
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
              src="images/unidadeESRMob(7).png"
              alt="Tratamento Específico"
              className="imagemEstetica"
            />
          )
        }
      >
        <p>São Gonçalo</p>
      </button>
    </Col>
  )

  return (
    <Contentor>
      <Container>
        <Row className="linhaSinuosaTratamentos linhaSinuosa linhaSinuosaEsquerda ">
          <br></br>
        </Row>
        <Row className="rowMain gothamBook">
          <br />
          <Col className="coluna1 someMobile">
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
              className="buttonNossasUnidades"
              onClick={() =>
                setImgUrlMob(
                  <Col className="coluna4 openMobile">
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadeESRMob(4).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(5).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(2).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(8).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(3).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(6).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
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
                            src="images/unidadeESRMob(7).png"
                            alt="Tratamento Específico"
                            className="imagemEstetica"
                          />
                        )
                      }
                    >
                      <p>São Gonçalo</p>
                    </button>
                  </Col>
                )
              }
            >
              <img
                loading="lazy"
                src="images/nossasUnidadesButton.png"
                alt="Botão de Unidades"
                className="openMobile buttonNossasUnidades semMarginDir "
              />
            </button>

            {imgUrlMob}
            {/*  <img loading="lazy"
              src={imgUrlMob}
              alt="Tratamento Específico"
              className="imagemEstetica"
            /> */}
          </Col>
          <Col className="coluna3 someMobile">
            <button onClick={() => setImgUrl('images/unidadeESR(2).png')}>
              <p>Botafogo</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(6).png')}>
              <p>Caxias II</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(5).png')}>
              <p>Leblon</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(7).png')}>
              <p>Madureira</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(4).png')}>
              <p>Niterói</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(8).png')}>
              <p>Nova Iguaçu</p>
            </button>
            <button onClick={() => setImgUrl('images/unidadeESR(3).png')}>
              <p>São Gonçalo</p>
            </button>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default UnidadesEstetica
