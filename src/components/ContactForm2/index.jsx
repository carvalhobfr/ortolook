import React, { useState } from 'react'
import axios from 'axios'

import { Container } from './styles'

export default () => {
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
    <Container>
      <h1>saiba nossos preços</h1>
      <p>
        preencha o formulário abaixo e receba uma média de preço dos nossos
        tratamentos.
      </p>
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
  )
}
