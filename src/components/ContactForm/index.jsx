import React, { useState } from 'react'
import axios from 'axios'
import { Modal, ModalBody } from 'reactstrap'

import { Contentor, Container } from './styles'

export default props => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    tel: '',
    email: '',
    unidade: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        tel: '',
        email: '',
        unidade: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xaylzkdr',
      data: inputs
    })
      .then(response => {
        handleServerResponse(true, 'Obrigado, sua mensagem foi enviada')
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <Contentor>
        <button onClick={toggle}>Entre em Contato</button>
        <Modal
          style={{
            width: '100%',
            maxWidth: '750px',
            background: 'transparent'
          }}
          isOpen={modal}
          toggle={toggle}
        >
          <ModalBody
            style={{
              border: 'none',
              background: 'transparent'
            }}
          >
            <Container>
              <h1>contato</h1>
              <form onSubmit={handleOnSubmit}>
                <input
                  id="name"
                  name="name"
                  placeholder="Nome"
                  onChange={handleOnChange}
                  required
                  value={inputs.name}
                />
                <input
                  id="tel"
                  type="tel"
                  name="tel"
                  placeholder="Telefone"
                  onChange={handleOnChange}
                  required
                  value={inputs.tel}
                />
                <input
                  id="email"
                  type="email"
                  name="_replyto"
                  placeholder="Email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
                <input
                  id="unidade"
                  name="unidade"
                  placeholder="Unidade"
                  onChange={handleOnChange}
                  required
                  value={inputs.unidade}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Dúvida..."
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
                <button type="submit" disabled={status.submitting}>
                  {!status.submitting
                    ? !status.submitted
                      ? 'Enviar'
                      : 'Enviado'
                    : 'Enviando'}
                </button>
              </form>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <p>{status.info.msg}</p>
              )}
            </Container>
          </ModalBody>
        </Modal>
      </Contentor>
    </>
  )
}
