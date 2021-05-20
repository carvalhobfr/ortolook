import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
import AgendaLateralDir from './../AgendaLateralDir'

const UnidadesAparelho = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadesAP(9).png')
  const [wppUrl, setWppUrl] = useState('https://wa.me/5521972878038')
  const [telUrl, setTelUrl] = useState('tel:+552132682309')
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
            <a
              href={telUrl}
              className="telURL"
 
            ></a>
            <a
              href={wppUrl}
              className="wppURL"
 
            ></a>
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
                        ) &
                        setWppUrl('https://wa.me/5521987793370') &
                        setTelUrl('+552126025098')
                      }
                    >
                      <p>Alcântara</p>
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
  {/*                   <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP5.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521994129202') &
                        setTelUrl('+552132682309')
                      }
                    >
                      <p>Botafogo</p>
                    </button> */}
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP1.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521969528335') &
                        setTelUrl('+552138454041')
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
                        ) &
                        setWppUrl('https://wa.me/5521981383586') &
                        setTelUrl('+552126528577')
                      }
                    >
                      <p>Caxias II</p>
                    </button>
                    {/*                     <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadeAPRMob6.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521992128819') &
                        setTelUrl('+552120817091')
                      }
                    >
                      <p>Copacabana</p>
                    </button> */}
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP11.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521992128819') &
                        setTelUrl('+552120817091')
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
                        ) &
                        setWppUrl('https://wa.me/5521965679778') &
                        setTelUrl('+552120290769')
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
                        ) &
                        setWppUrl('https://wa.me/5521967414822') &
                        setTelUrl('+552120290769')
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
                            src="images/unidadesMobileAP2.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521983333181') &
                        setTelUrl('+552138523143')
                      }
                    >
                      <p>São Gonçalo</p>
                    </button>
                    {/*                     <button
                      onClick={
                        (() =>
                          setImgUrlMob(
                            <img
                              loading="lazy"
                              src="images/unidadesMobileAP7.png"
                              alt="Tratamento Específico"
                              className="imagemEstetica semMarginEsq"
                            />
                          )&
                        setWppUrl('https://wa.me/5521998804004')&
                        setTelUrl('+552141029923'))
                      }
                    >
                      <p>São João</p>
                    </button> */}
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP4.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5524999890263') &
                        setTelUrl('+552422426301')
                      }
                    >
                      <p>Petrópolis</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP20.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5524999890263') &
                        setTelUrl('+552141029923')
                      }
                    >
                      <p>São João de Meriti</p>
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
              <a href={telUrl} className="telURL"></a>
              <a href={wppUrl} className="wppURL"></a>
              <Col className="imagemUnidadeMob">{imgUrlMob}</Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP5.png') &
                setWppUrl('https://wa.me/5521987793370') &
                setTelUrl('+552126025098')
              }
            >
              <p>Alcântara</p>
            </button>
{/*             <button
              onClick={() =>
                setImgUrl('images/unidadesAP1.png') &
                setWppUrl('https://wa.me/5521994129202') &
                setTelUrl('+552132682309')
              }
            >
              <p>Botafogo</p>
            </button> */}
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP2.png') &
                setWppUrl('https://wa.me/5521969528335') &
                setTelUrl('+552138454041')
              }
            >
              <p>Caxias I</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP3.png') &
                setWppUrl('https://wa.me/5521981383586') &
                setTelUrl('+552126528577')
              }
            >
              <p>Caxias II</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP6.png') &
                setWppUrl('https://wa.me/5521992128819') &
                setTelUrl('+552120817091')
              }
            >
              <p>Leblon</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP7.png') &
                setWppUrl('https://wa.me/5521965679778') &
                setTelUrl('+552120290769')
              }
            >
              <p>Madureira</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP8.png') &
                setWppUrl('https://wa.me/5521967414822') &
                setTelUrl('+552120290769')
              }
            >
              <p>Niterói</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP9.png') &
                setWppUrl('https://wa.me/5521997815927') &
                setTelUrl('+552127671719')
              }
            >
              <p>Nova Iguaçu</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP4.png') &
                setWppUrl('https://wa.me/5521983333181') &
                setTelUrl('+552138523143')
              }
            >
              <p>São Gonçalo</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP12.png') &
                setWppUrl('https://wa.me/5524999890263') &
                setTelUrl('+552422426301')
              }
            >
              <p>Petrópolis</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP13.png') &
                setWppUrl('https://wa.me/55215524999890263') &
                setTelUrl('+552141029923')
              }
            >
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
