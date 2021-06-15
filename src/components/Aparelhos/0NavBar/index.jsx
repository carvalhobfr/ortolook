/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
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
import ContactForm from '../../ContactForm2'

const NavOrtho = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [changeColor, setChangeColor] = useState(' ')
  const [navList, setNavList] = useState()

  const checkColor = () => {
    if (changeColor === ' ') {
      setChangeColor('navClick')
    } else {
      setChangeColor(' ')
    }
  }

  const toggle = () => {
    checkColor()
    setIsOpen(!isOpen)
    navListPrimeiro()
  }
  const navListSegundo = () => {
    setNavList(
      <Nav className="ml-auto" navbar>
        <NavItem></NavItem>
        <NavItem>
          <a
            onClick={() => {
              navListPrimeiro()
            }}
            className="navSec"
          >
            X
          </a>
        </NavItem>
        <NavItem>
          <br />
        </NavItem>
        <NavItem>
          <a className="navSec">
            <ContactForm className="modalContato" />
          </a>
        </NavItem>
        <NavItem>
          <br />
        </NavItem>
        <NavItem>
          <a
            href="https://ortolook.solides.jobs"
            target="_blank"
            rel="noreferrer"
            className="navSec"
          >
            trabalhe conosco
          </a>
        </NavItem>
        <NavItem></NavItem>
        <NavItem></NavItem>
      </Nav>
    )
  }
  const navListPrimeiro = () => {
    setNavList(
      <Nav className="ml-auto" navbar>
        <NavItem></NavItem>
        <NavItem>
          <NavLink href="/">inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/estetica">estética</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#ortolook">a ortolook</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#tratamentos">tratamentos</NavLink>
        </NavItem>
        {/*         <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>contato</DropdownToggle>
        </UncontrolledDropdown> */}
        <NavItem>
          <NavLink
            onClick={() => {
              navListSegundo()
            }}
          >
            contato
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#unidades">unidades</NavLink>
        </NavItem>
      </Nav>
    )
  }

  useEffect(() => {
    navListPrimeiro()
  }, [])

  return (
    <Contentor>
      <Navbar color="white" light expand="md" className=" gothamBook ">
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
        <NavbarToggler onClick={toggle} className={changeColor} />
        <Collapse isOpen={isOpen} navbar>
          {navList}
        </Collapse>
      </Navbar>
    </Contentor>
  )
}

export default NavOrtho
