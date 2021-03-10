import React, { useState, Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
// import AgendaLateralEsq from '../AgendaLateralEsq'

const UnidadesEstetica = () => {
  const [imgUrl, setImgUrl] = useState('images/UNDS4.png')
  const [wppUrl, setWppUrl] = useState('https://wa.me/5521972878038')
  const [imgUrlMob, setImgUrlMob] = useState(
    <img
      loading="lazy"
      src="images/unidadesESPL1.png"
      alt="Tratamento Específico"
      className="imagemEstetica"
    />
  )

  return (
    <Contentor>
      <Container id="unidades">
        <Row className="linhaSinuosaTratamentos linhaSinuosa linhaSinuosaEsquerda ">
          <br></br>
        </Row>
        <Row className="rowMain gothamBook">
          <br />
          <Col className="coluna1 gothamBook someMobile">
            <h4>
              As clínicas Ortolook Estética estão localizadas no estado do Rio
              de Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <a href={wppUrl}>
              <img
                loading="lazy"
                src={imgUrl}
                alt="Tratamento Específico"
                className="imagemEstetica"
              />
            </a>
          </Col>

          <Col className="coluna1 openMobile">
            <h4>
              As clínicas Ortolook Estética estão localizadas no estado do Rio
              de Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <Row className="linhaCarrossel">
              <button
                className="botaoNossasUnidades"
                onClick={() =>
                  setImgUrlMob(
                    <Col className="coluna4 openMobile semMarginDir">
                      <button
                        onClick={() =>
                          setImgUrlMob(
                            <img
                              loading="lazy"
                              src="images/unidadeESRMob(4).png"
                              alt="Tratamento Específico"
                              className="imagemEstetica"
                            />
                          ) & setWppUrl('https://wa.me/55219994124202')
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
                          ) & setWppUrl('https://wa.me/5521981383586')
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
                          ) & setWppUrl('https://wa.me/5521992128819')
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
                          ) & setWppUrl('https://wa.me/5521965679778')
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
                          ) & setWppUrl('https://wa.me/5521967414822')
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
                          ) & setWppUrl('https://wa.me/5521997815927')
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
                          ) & setWppUrl('https://wa.me/5521983333181')
                        }
                      >
                        <p>São Gonçalo</p>
                      </button>
                    </Col>
                  )
                }
              >
                <br />
                <br />
                <br />
              </button>

              <Col className="imagemUnidadeMob">
                <a href={wppUrl}>{imgUrlMob}</a>
              </Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(2).png') &
                setWppUrl('https://wa.me/55219994124202')
              }
            >
              <p>Botafogo</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(6).png') &
                setWppUrl('https://wa.me/5521981383586')
              }
            >
              <p>Caxias II</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(5).png') &
                setWppUrl('https://wa.me/5521992128819')
              }
            >
              <p>Leblon</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(7).png') &
                setWppUrl('https://wa.me/5521965679778')
              }
            >
              <p>Madureira</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(4).png') &
                setWppUrl('https://wa.me/5521967414822')
              }
            >
              <p>Niterói</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(8).png') &
                setWppUrl('https://wa.me/5521997815927')
              }
            >
              <p>Nova Iguaçu</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(3).png') &
                setWppUrl('https://wa.me/5521983333181')
              }
            >
              <p>São Gonçalo</p>
            </button>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default UnidadesEstetica
