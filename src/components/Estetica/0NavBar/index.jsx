/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { Contentor } from './styles'

const NavOrtho = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Contentor>
      <Navbar color="white" light expand="md" className="gothamBook">
        <div>
          <NavbarBrand href="/estetica">
            <img
              loading="lazy"
              src="/images/iconOrtholook2.svg"
              alt="Ortolook"
            />
          </NavbarBrand>
          <NavbarBrand href="/aparelhos">
            <img
              loading="lazy"
              src="/images/iconOrtholook.svg"
              alt="Ortolook"
            />
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem></NavItem>
            <NavItem>
              <NavLink href="/">inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aparelhos">aparelhos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#ortolook">a ortolook</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#tratamentos">tratamentos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                contato
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  <NavLink href="https://wa.me/5521972878038">
                    fale conosco
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://ortolook.solides.jobs">
                    trabalhe conosco
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#unidades">unidades</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Contentor>
  )
}

export default NavOrtho
