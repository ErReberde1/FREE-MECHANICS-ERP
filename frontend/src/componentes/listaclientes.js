import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Modal,ModalHeader,ModalBody, ModalFooter, Button, Form, Row, Col, FormGroup, Label, Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class ListaClientes extends Component {
   
    state = {
        clientes: [],
        clientes2: [],
        crearcliente: false,
        showModal: false,
        clienteId: {},
        clienteUpdateId2:{},
        busqueda: "",
        clienteUpdateId: {},
        showModalUpdate: false,
        nombre : "",
        apellido: "",
        email: "",
        direccion: "",
        cif: "",
        ciudad: "",
        pais: "",
        cp:""
        
    }
        onChangeNombre = (e)=>{
        this.setState({
        nombre : e.target.value})
      }
      onChangeApellido = (e)=>{
        this.setState({
        apellido : e.target.value})
      }
      onChangeEmail = (e)=>{
        this.setState({
        email : e.target.value})
      }
      onChangeDireccion = (e)=>{
        this.setState({
        direccion : e.target.value})
      }
      onChangeCiudad = (e)=>{
        this.setState({
        ciudad : e.target.value})
      }
      onChangePais = (e)=>{
        this.setState({
        pais : e.target.value})
      }
      onChangeCp = (e)=>{
        this.setState({
        cp : e.target.value})
      }
      onChangeCif = (e)=>{
        this.setState({
        cif : e.target.value})
      }
    
    crearCliente = ()=>{
        this.setState({crearcliente: !this.state.crearcliente})
    }
    componenteDidMount = async () =>{
        const res = await axios.get('http://localhost:4000/api/cliente');   
        this.setState({ clientes: res.data })
        this.setState({clientes2: res.data})
    }
    showModalUpdate = async (id) =>{
        const res = await axios.get('http://localhost:4000/api/cliente/' + id);
        this.setState({clienteUpdateId: res.data});
        this.setState({clienteUpdateId2: res.data});
        console.log(res.data);
        this.setState({nombre : res.data.nombre,
        apellido: res.data.apellido,
        email: res.data.email,
        direccion: res.data.direccion,
        cif: res.data.cif,
        ciudad: res.data.ciudad,
        pais: res.data.pais,
        cp:res.data.cp})
        this.setState({showModalUpdate: !this.state.showModalUpdate});
    }
    closeModalUpdate =()=>{
        this.setState({showModalUpdate: !this.state.showModalUpdate})
        this.setState({nombre : "",
        apellido: "",
        email: "",
        direccion: "",
        cif: "",
        ciudad: "",
        pais: "",
        cp:""
        })
    }
    

    showModal = async(id)=>{
        const res = await axios.get('http://localhost:4000/api/cliente/' + id);
        this.setState({clienteId: res.data}) 
        this.setState({showModal: !this.state.showModal})
    }

    closeModal =()=>{
        this.setState({showModal: !this.state.showModal})
    }
    

     filterElement (){

       
        const search =  this.state.clientes2.filter(item =>{
            
            if(item.nombre.toLowerCase().includes(this.state.busqueda) || 
            item.apellido.toLowerCase().includes(this.state.busqueda) || 
            item.email.toString().toLowerCase().includes(this.state.busqueda) || 
            item.cif.toString().toLowerCase().includes(this.state.busqueda))
                return item;
            
        })
        this.setState({clientes: search})
        
    }
    componentDidUpdate = async ()=>{
        
    }

    onChangeSearchElement = async(e)=>{
        e.persist()
        await this.setState({busqueda: e.target.value})
        this.filterElement()
    }

    deleteCliente = async (id)=>{
        await axios.delete('http://localhost:4000/api/cliente/' + id)

        this.componenteDidMount()
    }
    updateCliente = async(id) =>{
        
        await axios.put('http://localhost:4000/api/cliente/' + id, {
            nombre : this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            direccion: this.state.direccion,
            cif: this.state.cif,
            ciudad: this.state.ciudad,
            pais: this.state.pais,
            cp: this.state.cp
        })}
  render() {
    return (
        <div className="row">
            

            <hr></hr>
            
            <div className="nav-item">
                <button type="button" className="btn btn-secondary ms-2" onClick={this.componenteDidMount}>Consulta</button>
                <button type="button" className="btn btn-secondary ms-2"><Link to="/crearcliente">Alta cliente</Link></button>
                <input type="text" className="primary ms-2" onChange={this.onChangeSearchElement}></input>
            </div>
            <hr></hr>
            <div className="col-md-10 ms-5">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">cif</th>
                            <th scope="col">Email</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                     </thead>
                    {this.state.clientes.map(cliente => (
                            
                            <tbody key={cliente._id}>
                                <tr>
                                    <td>
                                        {cliente.nombre}
                                    </td>
                                    <td>
                                        {cliente.apellido}
                                    </td>
                                    <td>
                                        {cliente.cif}
                                    </td>
                                    <td>
                                        {cliente.email}
                                    </td>
                                    <td>
                                        <Button 
                                            type="button" className="btn btn-primary" onClick={()=>this.showModal(cliente._id)} key={cliente._id}>
                                            Consultar
                                        </Button>
                                        <Modal isOpen= {this.state.showModal} fullscreen = {true}>
                                            

                                            <ModalHeader>
                                                {this.state.clienteId.nombre} {this.state.clienteId.apellido}
                                            </ModalHeader>
                                            <ModalBody>
                                                <p><b>CIF:</b> {this.state.clienteId.cif}</p>
                                                <p><b>Dirección:</b> {this.state.clienteId.direccion}</p>
                                                <p><b>Email:</b> {this.state.clienteId.email}</p>
                                                <p><b>Código postal:</b> {this.state.clienteId.cp}</p>
                                                <p><b>Ciudad:</b> {this.state.clienteId.ciudad}</p>
                                                <p><b>Pais:</b> {this.state.clienteId.pais}</p>
                                                <Button color="primary">
                                                    Vehículos
                                                </Button>
                                                <Button color="primary ms-2">
                                                    Facturar
                                                </Button>
                                                <Button color="primary ms-2">
                                                    Histórico
                                                </Button>
                                            </ModalBody>
                                            <ModalFooter>
                                                
                                           
                                            
                                            <Button onClick={this.closeModal}>
                                                Cerrar
                                            </Button>
                                            </ModalFooter>

                                            
                                        {/* modal para actualizar */}
  
                                        </Modal>
                                      
                                       <Button 
                                            type="button" className="btn btn-primary" onClick={()=>this.showModalUpdate(cliente._id)}>
                                            Modificar
                                        </Button>

                                        <Modal isOpen= {this.state.showModalUpdate} fullscreen = {true}>
                                            
                                            <ModalHeader>
                                                {this.state.clienteUpdateId.nombre} {this.state.clienteUpdateId.apellido}
                                            </ModalHeader>
                                            <ModalBody>
                                            <Form className="formulario ms-4" onSubmit={()=>this.updateCliente(this.state.clienteUpdateId._id)}>
                                                <Row form>
                                                    <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleName">Nombre</Label>
                                                        <Input onChange={this.onChangeNombre}
                                                        name="Name"
                                                        placeholder="Nombre"
                                                        type="Name"
                                                        value = {this.state.nombre}
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleName">Apellidos</Label>
                                                        <Input  onChange={this.onChangeApellido}
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
                                                    <Input 
                                                    name="address" 
                                                    placeholder="Av..." 
                                                    onChange={this.onChangeDireccion}
                                                    value={this.state.direccion}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="exampleAddress">CIF</Label>
                                                    <Input 
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
                                                        <Input 
                                                        name="Ciudad" 
                                                        onChange={this.onChangeCiudad}
                                                        value={this.state.ciudad}
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                    <Col md={4}>
                                                    <FormGroup>
                                                        <Label for="exampleState">País</Label>
                                                        <Input 
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
                                                </Row>
                                                <Button className="btn btn-secondary" type="submit" >Editar</Button>
                                                </Form>

                                            
                                                {/* <Button color="primary">
                                                    Vehículos
                                                </Button>
                                                <Button color="primary ms-2">
                                                    Facturar
                                                </Button>
                                                <Button color="primary ms-2">
                                                    Histórico
                                                </Button> */}
                                            </ModalBody>
                                            <ModalFooter>
                                                
                                           
                                            
                                                <Button onClick={this.closeModalUpdate}>
                                                Cerrar
                                                </Button>
                                            </ModalFooter>
                                          
  
                                        </Modal>
                                                                                

                                        
                                        <button
                                            onClick={()=>this.deleteCliente(cliente._id)}
                                            className="btn btn-primary ms-1">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            
                            ))}
                    
                </table>
            </div>
            

        </div>
    )
  }
}
