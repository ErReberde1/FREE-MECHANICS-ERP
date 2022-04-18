import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Documentos extends Component {

  state = {
    clienteId:{},
    clientes: [],
    nombre: "",
    apellido:"",
    cif: "",
    cp:"",
    email:"",
    direccion:"",
    pais:"",
    articulo: "",
    precio: "",
    cantidad: null,
    total: null,
    showpage1: true
    
  };

  onChangeNombre=(e)=>{
    this.setState({nombre: e.target.value});
  }
  onChangeApellido=(e)=>{
    this.setState({apellido: e.target.value});
  }
  onChangeCif=(e)=>{
    this.setState({cif: e.target.value});
  }
  onChangeCp=(e)=>{
    this.setState({cp: e.target.value});
  }
  onChangeEmail=(e)=>{
    this.setState({email: e.target.value});
  }
  onChangeDireccion=(e)=>{
    this.setState({direccion: e.target.value});
  }
  onChangePais=(e)=>{
    this.setState({pais: e.target.value});
  }
  componentDidMount() {
    this.buscarCliente();
  }


  buscarCliente = async () => {
    const res = await axios.get("http://localhost:4000/api/cliente");
    this.setState({ clientes: res.data });
    console.log("buscando clientes!");
  };
  ventanaBusqueda = () => {
    console.log("llamando funcion");

    this.imprimir();
  };
  imprimir2 = () => {
    console.log("llamando funcion2");
  };

  emitirDocumento = () => {
    axios.post("http://localhost:4000/api/presupuesto", {
      nombre: this.state.nombre,
      cif: this.state.cif,
      articulo: this.state.articulo,
      precio: this.state.precio,
      cantidad: this.state.cantidad,
      total: this.state.total,
    });

  };
  selectCliente = async(id)=>{
    
    const res = await axios.get("http://localhost:4000/api/cliente/"+id)

    this.setState({
    clienteId: res.data,
    nombre: res.data.nombre,
    apellido: res.data.apellido,
    cif: res.data.cif,
    cp:res.data.cp,
    email:res.data.email,
    direccion:res.data.direccion,
    pais:res.data.pais
    })


    console.log(this.state.clienteId)
  }

  showPage = ()=>{
    this.setState({showpage1: !this.state.showpage1})
    console.log(this.state.showpage1)
  }
  

  render() {
    
    return (
      <div>
        <div className="mb-3 row pag1" style={{visibility: this.state.showpage1 ? 'visible' : 'hidden' }}>
          <form className="row g-3">
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Cliente
              </label>
              <div className="col-sm-10">
              <input type="text" placeholder="nombre, dni, teléfono, mail..."
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.nombre}
                  onChange={this.onChangeNombre}
                  />
                
              <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">cif</th>
                            <th scope="col">id</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                     </thead>
                    <tbody>
                    
                    <select
                      className="form-control selectpicker"
                      data-live-search="true"
                      multiple
                      data-style="form-control"
                      >
                    
                      {this.state.clientes.map((op) => (
                        <option onClick={()=>this.selectCliente(op._id)}
                        value={op._id} 
                        key={op._id}>
                         
                            {op.nombre}
                          
                        </option>
                        
                      ))}
                    
                  </select>
                  
                  
                  </tbody>
              </table>
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Apellidos
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.apellido}
                  onChange={this.onChangeApellido}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                CIF
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.cif}
                  onChange={this.onChangeCif}
                />
              </div>
            </div>
          <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                CP
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.cp}
                  onChange={this.onChangeCp}
                />
              </div> _
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Dirección
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.direccion}
                  onChange={this.onChangeDireccion}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                País
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.pais}
                  onChange={this.onChangePais}
                />
              </div>
            </div>
          </form>
          <button className="btn btn-primary" onClick={this.showPage}>Siguiente</button>
        </div>

       {/*  /* pagina 2 del formulario  */ }


        <div className="mb-3 row pag2" style={{visibility: this.state.showpage1 ? 'hidden' : 'visible' }} >
          <form className="row g-3">
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                OTRO 
              </label>
              <div className="col-sm-10">
              <input type="text" placeholder="nombre, dni, teléfono, mail..."
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.nombre}
                  onChange={this.onClienteChange}
                  />
                
              <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">cif</th>
                            <th scope="col">id</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                     </thead>
                    <tbody>
                    
                    <select
                      className="form-control selectpicker"
                      data-live-search="true"
                      multiple
                      data-style="form-control"
                      >
                    
                      {this.state.clientes.map((op) => (
                        <option onClick={()=>this.selectCliente(op._id)}
                        value={op._id} 
                        key={op._id}>
                         
                            {op.nombre}
                          
                        </option>
                        
                      ))}
                    
                  </select>
                  
                  
                  </tbody>
              </table>
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
               OTRO
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.cif}
                />
              </div>
            </div>
          </form>
        
        
          <form className="row g-3">
          <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                CP
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.cp}
                />
              </div> _
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.email}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                Dirección
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.direccion}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="text" className="col-sm-2 col-form-label">
                País
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="text"
                  value = {this.state.clienteId.pais}
                />
              </div>
            </div>
          </form>
          <button className="btn btn-primary" onClick={this.showPage}>Atrás</button>
          <button className="btn btn-primary">Generar documento</button>
        </div>
    </div>
    );
  }
}
