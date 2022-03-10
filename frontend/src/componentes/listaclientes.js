import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class ListaClientes extends Component {
   
    state = {
        clientes: [],
        crearcliente: false
    }
    
    crearCliente = ()=>{
        this.setState({crearcliente: !this.state.crearcliente})
    }
    componenteDidMount = async () =>{
        const res = await axios.get('http://localhost:4000/api/cliente');
        
        this.setState({ clientes: res.data })
        
        
    }
  render() {
    return (
        <div className="row">
            <hr></hr>
            
            <div className="nav-item">
                <button type="button" className="btn btn-secondary" onClick={this.componenteDidMount}>Consulta</button>
                <button type="button" className="btn btn-secondary" ><Link to="/crearcliente">Alta cliente</Link></button>
            </div>
            <hr></hr>
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
                    {this.state.clientes.map(cliente => (
                            
                            <tbody key={cliente.id}>
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
                                        {cliente._id}
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-secondary ms-1">
                                            Consultar
                                        </button>
                                        <button 
                                            className="btn btn-secondary ms-1">
                                            Modificar
                                        </button>
                                        <button 
                                            className="btn btn-secondary ms-1">
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
