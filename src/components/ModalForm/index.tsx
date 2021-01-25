import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const ModalExample = props => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js'
    script.async = true
    document.body.appendChild(script)
  })

  return (
    <div>
      <Button className="semMarginEsq" onClick={toggle}>
        <img
          src="/images/botaoNossosPrecos.png"
          alt="Botãos"
          height="15px"
          style={{ margin: '0!important' }}
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modalOpen">
        <ModalHeader toggle={toggle}>Saiba nossos preços</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleName">Nome</Label>
              <Input
                type="text"
                name="email"
                id="exampleName"
                placeholder="Seu nome"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Seu e-mail"
              />
            </FormGroup>

            <Button>Enviar</Button>
          </Form>
        </ModalBody>

        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Enviar
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  )
}

export default ModalExample
