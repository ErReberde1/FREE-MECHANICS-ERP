import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Modal,ModalHeader,ModalBody, ModalFooter, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Listaproveedores extends Component {

  state ={
    proveedores: [],
    proveedor:{},
    openModal: false
  }

  getProveedores = async()=>{
    const res = await axios.get('http://localhost:4000/api/proveedor')

    this.setState({proveedores : res.data})
  }

  getProveedor = async(id)=>{
    const res = await axios.get('http://localhost:4000/api/proveedor/'+ id)
    this.setState({proveedor: res.data})
    this.showModalProveedor()
  }

  showModalProveedor = ()=>{
    this.setState({openModal: !this.state.openModal})
  }


  render() {
    return (
      <div>
        <button className="btn btn-secondary ms-2"onClick={this.getProveedores}>
          Consulta
        </button>
        <button className="btn btn-secondary ms-2">
          <Link  to="/crearproveedor">CrearProveedor</Link>
        </button>
        <div className="col-md-10 ms-5">
                <table className="table">
                    <thead className="thead-dark">
                        <tr >
                            
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">cif</th>
                            <th scope="col">id</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                     </thead>
                    {this.state.proveedores.map(proveedor => (
                            
                            <tbody key={proveedor._id}>
                                <tr>
                                    <td>
                                        {proveedor.nombre}
                                    </td>
                                    <td>
                                        {proveedor.apellido}
                                    </td>
                                    <td>
                                        {proveedor.cif}
                                    </td>
                                    <td>
                                        {proveedor._id}
                                    </td>
                                    <td>
                                        <Button 
                                            onClick={()=>this.getProveedor(proveedor._id)}
                                            type="button" className="btn btn-primary"  >
                                            Consultar
                                        </Button>
                                        <Modal  isOpen={this.state.openModal} fullscreen = {true}>
                                            

                                            <ModalHeader>
                                                <p>{this.state.proveedor.nombre}</p>
                                                <p>{this.state.proveedor.apellido}</p>
                                                <p>{this.state.proveedor.email}</p>
                                                <p>{this.state.proveedor.direccion}</p>
                                                <p>{this.state.proveedor.cif}</p>
                                                <p>{this.state.proveedor.provincia}</p>
                                                <p>{this.state.proveedor.telefono}</p>
                                                <p>{this.state.proveedor.pais}</p>
                                                <p>{this.state.proveedor.cp}</p>
                                                <p>{this.state.proveedor.plantilla}</p>
                                                <p>{this.state.proveedor.impuesto}</p>
                                            </ModalHeader>
                                            <ModalBody>
                                                
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
                                                
                                           
                                            
                                            <Button onClick={()=>this.showModalProveedor()}>
                                                Cerrar
                                            </Button>
                                            </ModalFooter>
                                          
  
                                        </Modal>
                                                                                

                                        <Button 
                                            className="btn btn-primary ms-1">
                                            Modificar
                                        </Button>
                                        <Button
                                            className="btn btn-primary ms-1">
                                            Eliminar
                                        </Button>
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
