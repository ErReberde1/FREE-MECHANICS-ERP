import axios from "axios";
import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default class CrearArticulo extends Component {

  state ={
    codigo: "",
    nombre: "",
    precio: "",
    impuesto: "",
    tarifa: "",
    descripcion: "",
    fecha: ""
  };
  
  onChangeCodigo=(e)=>{
    this.setState({codigo: e.target.value});
  }

  onChangeNombre = (e) => {
    this.setState({nombre: e.target.value});
  }
  onChangePrecio = (e)=>{
    this.setState({precio: e.target.value})
  }
  onChangeImpuesto = (e)=>{
    this.setState({impuesto: e.target.value})
  }

  onChangeTarifa = (e)=>{
    this.setState({tarifa: e.target.value})
  }

  onChangeDescripcion = (e)=>{
    this.setState({descripcion: e.target.value})
  }

  onChangeFecha = (e)=>{
    this.setState({fecha: e.target.value})
  }

  onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/api/articulo", {
        codigo: this.state.codigo,
        nombre: this.state.nombre,
        precio: this.state.precio,
        impuesto: this.state.impuesto,
        tarifa: this.state.tarifa,
        descripcion: this.state.descripcion,
        fecha: this.state.fecha
    });
    this.setState({
      codigo: "",
      nombre: "",
      precio: "",
      impuesto: "",
      tarifa: "",
      descripcion: "",
      fecha:""
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
                  placeholder="artículo"
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
                  id="precio"
                  name="precio"
                  placeholder="Precio"
                  type="number"
                  value={this.state.precio}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">fecha</Label>
                <Input
                  onChange={this.onChangeFecha}
                  id="date"
                  name="date"
                  placeholder="xx/xx/xxxx"
                  type="date"
                  value={this.state.fecha}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Impuesto</Label>
                <Input
                  onChange={this.onChangeImpuesto}
                  id="impuesto"
                  name="Impuesto"
                  placeholder="Impuesto"
                  type="text"
                  value={this.state.impuesto}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">tarifa</Label>
                <Input
                  onChange={this.onChangeTarifa}
                  id="tarifa"
                  name="tarifa"
                  placeholder="tarifa"
                  type="text"
                  value={this.state.tarifa}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Descripción</Label>
                <Input
                  onChange={this.onChangeDescripcion}
                  id="descripcion"
                  name="descripcion"
                  placeholder="descripcion"
                  type="textarea"
                  value={this.state.descripcion}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-secondary">Crear Artículo</Button>
        </Form>
      </div>
    );
  }
}
