import React, { Component } from 'react'
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class CrearProveedor extends Component {
  state = {
    nombre : "",
    apellido: "",
    email: "",
    direccion: "",
    cif: "",
    provincia:"",
    telefono:"",
    ciudad: "",
    pais: "",
    cp:"",
    plantilla: "",
    impuesto: ""

  }
  onChangeNombre = (e)=>{
    this.setState({
    nombre : e.target.value.toUpperCase()})
  }
  onChangeApellido = (e)=>{
    this.setState({
    apellido : e.target.value.toUpperCase()})
  }
  onChangeEmail = (e)=>{
    this.setState({
    email : e.target.value.toUpperCase()})
  }
  onChangeDireccion = (e)=>{
    this.setState({
    direccion : e.target.value.toUpperCase()})
  }
  onChangeCiudad = (e)=>{
    this.setState({
    ciudad : e.target.value.toUpperCase()})
  }
  onChangePais = (e)=>{
    this.setState({
    pais : e.target.value.toUpperCase()})
  }
  onChangeProvincia = (e)=>{
    this.setState({
    pais : e.target.value.toUpperCase()})
  }
  onChangeCp = (e)=>{
    this.setState({
    provincia : e.target.value.toUpperCase()})
  }
  onChangeCif = (e)=>{
    this.setState({
    cif : e.target.value.toUpperCase()})
  }
  onChangeTelefono = (e)=>{
    this.setState({
    telefono : e.target.value.toUpperCase()})
  }
  onChangePlantilla = (e)=>{
    this.setState({
    plantilla : e.target.value.toUpperCase()})
  }
  onChangeImpuesto = (e)=>{
    this.setState({
    impuesto : e.target.value.toUpperCase()})
  }

  onSubmit = async e=>{
    e.preventDefault()
    await axios.post('http://localhost:4000/api/proveedor', {
      nombre : this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      direccion: this.state.direccion,
      cif: this.state.cif,
      ciudad: this.state.ciudad,
      pais: this.state.pais,
      cp: this.state.cp,
      provincia: this.state.provincia,
      telefono: this.state.provincia,
      plantilla: this.state.plantilla,
      impuesto: this.state.impuesto
    });
    this.setState({
      nombre : "",
      apellido: "",
      email: "",
      direccion: "",
      cif: "",
      ciudad: "",
      pais: "",
      cp: "",
      provincia: "",
      telefono: "",
      plantilla: "",
      impuesto: ""
    })
  }

  render() {
    return (
      <div>
        <hr></hr>
        <div className ="nav-item">
          <button className="btn btn-secondary" ><Link to="/clientes">Consulta</Link></button>
        </div>
        <hr></hr>
      <Form className="formulario ms-4" onSubmit={this.onSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Nombre</Label>
            <Input onChange={this.onChangeNombre}
              id="name"
              name="Name"
              placeholder="Nombre"
              type="Name"
              value={this.state.nombre}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Apellidos</Label>
            <Input  onChange={this.onChangeApellido}
              id="apellido"
              name="Name"
              placeholder="Apellido"
              type="Name"
              value={this.state.apellido}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={this.onChangeEmail}
              id="exampleEmail"
              name="email"
              placeholder="ejemplo@ejemplo.es"
              type="email"
              value={this.state.email}
            />
          </FormGroup>
        </Col>
        
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Dirección</Label>
        <Input id="exampleAddress" 
        name="address" 
        placeholder="Av..." 
        onChange={this.onChangeDireccion}
        value={this.state.direccion}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">CIF</Label>
        <Input id="exampleAddress"
        name="CIF" 
        placeholder="CIF" 
        onChange={this.onChangeCif}
        value={this.state.cif}
        />
      </FormGroup>
      
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">Ciudad</Label>
            <Input id="exampleCity"
            name="Ciudad" 
            onChange={this.onChangeCiudad}
            value={this.state.ciudad}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">País</Label>
            <Input id="exampleState"
            name="Pais"
            onChange={this.onChangePais}
            value={this.state.pais}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">CP</Label>
            <Input id="exampleZip" 
            length="5"
            type="number"
            name="CP" 
            onChange={this.onChangeCp}
            value={this.state.cp}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Provincia</Label>
            <Input id="exampleZip" 
            length="5"
            type="text"
            name="CP" 
            onChange={this.onChangeProvincia}
            value={this.state.provincia}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Teléfono</Label>
            <Input id="exampleZip" 
            length="5"
            type="text"
            name="CP" 
            onChange={this.onChangeTelefono}
            value={this.state.telefono}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Plantilla</Label>
            <Input id="exampleZip" 
            length="5"
            type="text"
            name="CP" 
            onChange={this.onChangePlantilla}
            value={this.state.plantilla}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Impuesto</Label>
            <Input id="exampleZip" 
            length="5"
            type="text"
            name="CP" 
            onChange={this.onChangeImpuesto}
            value={this.state.impuesto}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button className="btn btn-secondary" type="submit">Dar de alta</Button>
    </Form>
    </div>
    )
  }
}
