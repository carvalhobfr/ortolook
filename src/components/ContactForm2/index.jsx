import React, { useState } from 'react'
import axios from 'axios'

import { Button } from 'react-bootstrap'
import { Container } from './styles'
import Modal from 'react-bootstrap/Modal'
/* import ModalDialog from 'react-bootstrap/ModalDialog' */

export default () => {
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    name: '',
    tel: '',
    email: ''
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
        email: ''
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
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
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
        {/*     <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body bsPrefix="modalBody">
          <Container>
            <h1>saiba nossos preços</h1>
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
