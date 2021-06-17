import React, { useState, Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
// import AgendaLateralEsq from '../AgendaLateralEsq'

const UnidadesEstetica = () => {
  const [imgUrl, setImgUrl] = useState('images/UNDS4.png')
  const [wppUrl, setWppUrl] = useState(
    'https://signupforservices.com/whatsapp/optin/?bId=445c2d7e-600d-4dfe-a133-a0955a37714b&bName=ortolook&s=URL&lang=pt_BR'
  )
  const [telUrl, setTelUrl] = useState('+552132682309')
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
            <a href={telUrl} className="telURL"></a>
            <a href={wppUrl} className="wppURL"></a>
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
                          ) &
                          setWppUrl('https://wa.me/55219994124202') &
                          setTelUrl('tel:+552132682309')
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
                          ) &
                          setWppUrl('https://wa.me/5521981383586') &
                          setTelUrl('tel:+552126528577')
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
                          ) &
                          setTelUrl('tel:+552120817091') &
                          setWppUrl('https://wa.me/5521992128819')
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
                          ) &
                          setWppUrl('https://wa.me/5521965679778') &
                          setTelUrl('tel:+552120290769')
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
                          ) &
                          setWppUrl('https://wa.me/5521967414822') &
                          setTelUrl('tel:+552136204041')
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
                          ) &
                          setWppUrl('https://wa.me/5521997815927') &
                          setTelUrl('tel:+552127671719')
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
                          ) &
                          setWppUrl('https://wa.me/5521983333181') &
                          setTelUrl('tel:+552138523143')
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
                <a href={telUrl} className="telURL"></a>
                <a href={wppUrl} className="wppURL"></a>
                {imgUrlMob}
              </Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(2).png') &
                setWppUrl('https://wa.me/55219994124202') &
                setTelUrl('tel:+552132682309')
              }
            >
              <p>Botafogo</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(6).png') &
                setWppUrl('https://wa.me/5521981383586') &
                setTelUrl('tel:+552126528577')
              }
            >
              <p>Caxias II</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(5).png') &
                setWppUrl('https://wa.me/5521992128819') &
                setTelUrl('tel:+552120817091')
              }
            >
              <p>Leblon</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(7).png') &
                setWppUrl('https://wa.me/5521965679778') &
                setTelUrl('tel:+552120290769')
              }
            >
              <p>Madureira</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(4).png') &
                setWppUrl('https://wa.me/5521967414822') &
                setTelUrl('tel:+552136204041')
              }
            >
              <p>Niterói</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(8).png') &
                setWppUrl('https://wa.me/5521997815927') &
                setTelUrl('tel:+552127671719')
              }
            >
              <p>Nova Iguaçu</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadeESR(3).png') &
                setWppUrl('https://wa.me/5521983333181') &
                setTelUrl('tel:+552138523143')
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
