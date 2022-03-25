import React, { Component } from "react";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Offcanvas, OffcanvasHeader, OffcanvasBody} from 'reactstrap'
import LoginButton from './login'

export default class Navegacion extends Component {

  state ={
    verMenu : false
  }
  showMenuDespeglable =()=>{
    this.setState({verMenu: !this.state.verMenu})
    
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">
            FREE-MECHANICS-ERP
          </Link>

          <Button onClick={this.showMenuDespeglable}
          
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Offcanvas 
          className="navbar navbar-dark bg-dark"
          isOpen ={this.state.verMenu} 
          toggle={this.showMenuDespeglable}
          
          >
            
            <OffcanvasHeader toggle={this.showMenuDespeglable}>
              Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody >
              <div className="navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active ms-5">
                    <Link className="nav-link" to="/">Incio</Link>
                  </li>
                  <li className="nav-item active ms-5">
                    <Link className="nav-link" to="/proveedores">Proveedores</Link>
                  </li>
                  <li className="nav-item active ms-5">
                    <Link className="nav-link" to="/clientes">Clientes</Link>
                  </li>
                  <li className="nav-item active ms-5">
                    <Link className="nav-link" to="/articulos">Artículos</Link>
                  </li>
                  <li className="nav-item active ms-5">
                    <Link className="nav-link" to="/configuracion">Configuración</Link>
                  </li>
                </ul>
              </div>
          </OffcanvasBody>
          </Offcanvas>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ms-5">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" aria-current="page" to="/clientes">
                  Clientes
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" aria-current="page" to="/proveedores">
                  Proveedores
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" aria-current="page" to="/articulos">
                  Artículos
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" aria-current="page" to="/vehiculos">
                  Vehículos
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" aria-current="page" to="/configuracion">
                  Configuración
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="float-end me-3">
              <LoginButton/>
        </div>
      </nav>
    );
  }
}
