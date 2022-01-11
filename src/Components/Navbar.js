import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
const Navbar = () => {
  return (
    <Nav variant="tabs" className="justify-content-end sticky-top navbar-dark bg-dark" >
    <Nav.Item>
      <Nav.Link href="home">Inicio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="mision">Mision/Vision</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="activities">Actividades</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="uspage">Nuestro equipo</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="history">Mujeres e Historia</Nav.Link>
    </Nav.Item>

    <NavDropdown title="Informacion" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Seminario</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Charlas</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Talleres</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Bolsa de empleo</NavDropdown.Item>
       
      </NavDropdown>
   
  </Nav>
  )
}

export default Navbar
