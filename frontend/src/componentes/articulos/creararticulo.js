import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default class CrearArticulo extends Component {

  render() {
    return (
      <div>
        <Form className="formulario ms-4" onSubmit={this.onSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Código</Label>
                <Input
                  onChange={this.onChangeNombre}
                  id="name"
                  name="Name"
                  placeholder="Nombre"
                  type="Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Nombre</Label>
                <Input
                  onChange={this.onChangeApellido}
                  id="apellido"
                  name="Name"
                  placeholder="Apellido"
                  type="Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Porcentaje</Label>
                <Input
                  onChange={this.onChangeEmail}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">fecha</Label>
                <Input
                  onChange={this.onChangeEmail}
                  id="exampleEmail"
                  name="email"
                  placeholder="ejemplo@ejemplo.es"
                  type="date"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
