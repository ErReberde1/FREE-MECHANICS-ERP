import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ListaArticulos extends Component {
    state = {
        articulos : []
    }

    getArticulos = async()=>{
        const res = await axios.get("http://localhost:4000/api/articulo")
        this.setState({articulos: res.data})
    }


  render() {
    return (
    
      <main>
            <button className="btn btn-secondary" onClick={this.getArticulos}>Consultar</button>
            <button className="btn btn-secondary" ><Link to="/creararticulo">Alta Artículo</Link></button>
            <div className="col-md-10 ms-5">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    {this.state.articulos.map(articulo=>(

                        <tbody key ={articulo._id}>
                        <tr>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}€</td>
                            <td>{articulo.descripcion}</td>
                            <td>{articulo.fecha}</td>
                        </tr>
                        </tbody>
                    )
                    )}
                    
                </table>
            </div>
      </main>
    )
  }
}
