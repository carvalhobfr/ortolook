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

            <Button type="submit">Enviar</Button>
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
