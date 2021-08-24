import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
import AgendaLateralDir from './../AgendaLateralDir'

const UnidadesAparelho = () => {
  const [imgUrl, setImgUrl] = useState('/images/unidadesAP(9).png')
  const [wppUrl, setWppUrl] = useState('#')
  const [telUrl, setTelUrl] = useState('#')
  const [displayWpp, setDisplayWpp] = useState('hideMob')
  const [imgUrlMob, setImgUrlMob] = useState(
    <img
      loading="lazy"
      src="images/unidadeAPRMob0.png"
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
              As clínicas Ortolook estão localizadas no estado do Rio de
              Janeiro!
              <br /> Escolha a mais próxima de você!
            </h4>
            <a href={telUrl} className="telURL " rel="nofollow"></a>
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
              As clínicas Ortolook estão localizadas no estado do Rio de
              Janeiro!
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
                        setDisplayWpp('') &
                        setTelUrl('tel:+552126025098')
                      }
                    >
                      <p>Alcântara</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesAPmob16.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521985074741') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552141144180')
                      }
                    >
                      <p>Bangu</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAP5.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521994124202') &
                        setDisplayWpp(' ') &
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
                            src="images/unidadesMobileAP1.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521969528335') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552138454041')
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
                        setDisplayWpp(' ') &
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
                            src="images/unidadesAPmob17.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521987028897') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552121487672')
                      }
                    >
                      <p>Copacabana</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesAPmob15.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521966655368') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552141144167')
                      }
                    >
                      <p>Itaboraí</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesAPmob18.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521985473649') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552131295054')
                      }
                    >
                      <p>Ipanema</p>
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
                        ) &
                        setWppUrl('https://wa.me/5521992128819') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552120817091')
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
                        setDisplayWpp(' ') &
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
                            src="images/unidadeAPRMob9.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521967414822') &
                        setDisplayWpp(' ') &
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
                            src="images/unidadesMobileAP10.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521967757257') &
                        setDisplayWpp(' ') &
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
                            src="images/unidadesMobileAP2.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521983333181') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552138523143')
                      }
                    >
                      <p>São Gonçalo</p>
                    </button>
                    <button
                      onClick={() =>
                        setImgUrlMob(
                          <img
                            loading="lazy"
                            src="images/unidadesMobileAPTijuca.png"
                            alt="Tratamento Específico"
                            className="imagemEstetica semMarginEsq"
                          />
                        ) &
                        setWppUrl('https://wa.me/5521988683090') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552135563804')
                      }
                    >
                      <p>Tijuca</p>
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
                        ) &
                        setWppUrl('https://wa.me/5524999890263') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552422426301')
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
                        setWppUrl('https://wa.me/5521998804004') &
                        setDisplayWpp(' ') &
                        setTelUrl('tel:+552141029923')
                      }
                    >
                      <p>São João de Meriti</p>
                    </button>
                  </Col>
                ) & setDisplayWpp('hideMob')
              }
            >
              <br />
              <br />
              <br />
            </button>

            <Row className="linhaCarrossel">
              <a href={telUrl} className={'telURL ' + displayWpp}></a>
              <a href={wppUrl} className={'wppURL ' + displayWpp}></a>
              <Col className="imagemUnidadeMob">{imgUrlMob}</Col>
            </Row>
          </Col>
          <Col className="coluna3 gothamBook someMobile">
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP5.png') &
                setWppUrl('https://wa.me/5521987793370') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552126025098')
              }
            >
              <p>Alcântara</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP16.png') &
                setWppUrl('https://wa.me/5521985074741') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552141144180')
              }
            >
              <p>Bangu</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP1.png') &
                setWppUrl('https://wa.me/5521994124202') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552132682309')
              }
            >
              <p>Botafogo</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP2.png') &
                setWppUrl('https://wa.me/5521969528335') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552138454041')
              }
            >
              <p>Caxias I</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP3.png') &
                setWppUrl('https://wa.me/5521981383586') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552126528577')
              }
            >
              <p>Caxias II</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP18.png') &
                setWppUrl('https://wa.me/5521987028897') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552121487672')
              }
            >
              <p>Copacabana</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP15.png') &
                setWppUrl('https://wa.me/5521966655368') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552141144167')
              }
            >
              <p>Itaboraí</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP17.png') &
                setWppUrl('https://wa.me/5521985473649') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552131295054')
              }
            >
              <p>Ipanema</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP6.png') &
                setWppUrl('https://wa.me/5521992128819') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552120817091')
              }
            >
              <p>Leblon</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP7.png') &
                setWppUrl('https://wa.me/5521965679778') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552120290769')
              }
            >
              <p>Madureira</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP8.png') &
                setWppUrl('https://wa.me/5521967414822') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552136204041')
              }
            >
              <p>Niterói</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP9.png') &
                setWppUrl('https://wa.me/5521967757257') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552127671719')
              }
            >
              <p>Nova Iguaçu</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP4.png') &
                setWppUrl('https://wa.me/5521983333181') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552138523143')
              }
            >
              <p>São Gonçalo</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAPTijuca.png') &
                setWppUrl('https://wa.me/5521988683090') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552135563804')
              }
            >
              <p>Tijuca</p>
            </button>

            <button
              onClick={() =>
                setImgUrl('images/unidadesAP12.png') &
                setWppUrl('https://wa.me/5524999890263') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552422426301')
              }
            >
              <p>Petrópolis</p>
            </button>
            <button
              onClick={() =>
                setImgUrl('images/unidadesAP13.png') &
                setWppUrl('https://wa.me/5521998804004') &
                setDisplayWpp(' ') &
                setTelUrl('tel:+552141029923')
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
