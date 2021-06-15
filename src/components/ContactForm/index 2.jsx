import React, { useState } from 'react'
import axios from 'axios'

import { Button } from 'react-bootstrap'
import { Container } from './styles'
import Modal from 'react-bootstrap/Modal'
/* import ModalDialog from 'react-bootstrap/ModalDialog' */

const ContatoForm = () => {
  const [show, setShow] = useState(false)
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
    duvida: ''
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
        duvida: ''
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
      url: 'https://formspree.io/f/xyylyanb',
      data: inputs
    })
      .then(response => {
        handleServerResponse(true, 'Obrigado, sua mensagem foi enviada')
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <>
      <a variant="primary" onClick={() => setShow(true)}>
        fale conosco
      </a>
      <Modal
        backdrop={true}
        bsPrefix="meuModal"
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modalTestDialog modal-100w"
        contentClassName="border-0"
        aria-labelledby="example-custom-modal-styling-title"
      >
        ;
        <Modal.Header
          closeButton
          style={{ borderBottom: 'none' }}
        ></Modal.Header>
        <Modal.Body bsPrefix="modalBody" closeButton>
          <Container>
            <h1>contato</h1>
            <form onSubmit={handleOnSubmit}>
              <input
                id="name"
                name="name"
                placeholder="nome"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
              <input
                id="tel"
                type="tel"
                name="tel"
                placeholder="telefone"
                onChange={handleOnChange}
                required
                value={inputs.tel}
              />
              <input
                id="email"
                type="email"
                name="_replyto"
                placeholder="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
              <input
                id="unidade"
                type="text"
                name="unidade"
                placeholder="unidade"
                onChange={handleOnChange}
                value={inputs.unidade}
              />
              <textarea
                name="duvida"
                id="duvida"
                cols="10"
                rows="2"
                onChange={handleOnChange}
                value={inputs.duvida}
                placeholder="dúvida..."
              ></textarea>
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
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ContatoForm
