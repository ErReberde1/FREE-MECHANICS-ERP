import React, { Component } from "react";

import axios from 'axios'
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

export default class CrearArticulo extends Component {

  state = {
    codigo: "",
    nombre: "",
    fecha: "",
    precio: "",
    impuesto: "",
    tarifa: "",
    descripcion: ""
  }

  onChangeCodigo = (e)=>{
    this.setState({codigo: e.target.value})
  }

  onChangeNombre = (e)=>{
    this.setState({nombre: e.target.value})
  }

  onChangeFecha = (e)=>{
    this.setState({fecha: e.target.value})
  }
  onChangePrecio = (e)=>{
    this.setState({precio: e.target.value})
  }
  onChangeImpuesto = (e)=>{
    this.setState({impuesto: e.target.value})
  }
  onChangeTarifa = (e)=>{
    this.setState({tarifao: e.target.value})
  }
  onChangeDescripción = (e)=>{
    this.setState({descripcion: e.target.value})
  }

  onSubmit = ()=>{
    axios.post("http://localhost:4000/api/articulo", {
      codigo: this.state.codigo,
      nombre: this.state.nombre,
      fecha: this.state.fecha,
      precio: this.state.precio,
      impuesto: this.state.impuesto,
      tarifa: this.state.tarifa,
      descripcion: this.state.descripcion
    });
    this.setState({
      codigo: "",
      nombre: "",
      fecha: "",
      precio: "",
      impuesto: "",
      tarifa: "",
      descripcion: ""
    })
  }

  render() {
    return (
      <div>
        <Form className="formulario ms-4" onSubmit={this.onSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Código</Label>
                <Input
                  onChange={this.onChangeCodigo}
                  id="name"
                  name="Name"
                  placeholder="Nombre"
                  type="Name"
                  value={this.state.codigo}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Nombre</Label>
                <Input
                  onChange={this.onChangeNombre}
                  id="apellido"
                  name="Name"
                  placeholder="Apellido"
                  type="Name"
                  value={this.state.nombre}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Precio</Label>
                <Input
                  onChange={this.onChangePrecio}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="email"
                  value={this.state.precio}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Impuesto</Label>
                <Input
                  onChange={this.onChangeImpuesto}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="email"
                  value={this.state.impuesto}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Tarifa</Label>
                <Input
                  onChange={this.onChangeTarifa}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="date"
                  value={this.state.tarifa}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Descripción</Label>
                <Input
                  onChange={this.onChangeDescripcion}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="date"
                  value={this.state.descripcion}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
