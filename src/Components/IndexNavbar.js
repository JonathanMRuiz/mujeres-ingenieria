import React from 'react'
import Nav from 'react-bootstrap/Nav'


const IndexNavbar = () => {
  
  return (

    <Nav variant="pills" className="justify-content-end sticky-top navbar-dark bg-dark" >
    <Nav.Item>
      <Nav.Link href="home"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home")
                      .scrollIntoView();
                  }}>Inicio</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link href="mision"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("mision")
                      .scrollIntoView();
                  }}>Mision/Vision</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="activities"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("activities")
                      .scrollIntoView();
                  }}>Actividades</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/uspage"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("uspage")
                      .scrollIntoView();
                  }}>Nuestro equipo</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="history"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("history")
                      .scrollIntoView();
                  }}>Mujeres e Historia</Nav.Link>
    </Nav.Item>
    </Nav>
               
  )
}

export default IndexNavbar
