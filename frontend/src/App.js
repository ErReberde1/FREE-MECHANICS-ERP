import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navegacion from './componentes/navegacion';
import ListaClientes from './componentes/listaclientes';
import CrearCliente from './componentes/crearcliente';
import Principal from './componentes/principal';
import Configuracion from './componentes/configuracion'
import CrearArticulo from './componentes/articulos/creararticulo'
import Listaproveedores from './componentes/proveedores/listaproveedores'
import Vehiculos from './componentes/vehiculos'
import CrearProveedor from './componentes/proveedores/crearproveedor'
import ListaArticulos from './componentes/articulos/listaarticulos'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      
      <Navegacion/>
      
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/clientes" element={<ListaClientes/>}/>
        <Route path="/vehiculos" element={<Vehiculos/>}/>
        <Route path="/articulos" element={<ListaArticulos/>}/>
        <Route path="/configuracion" element={<Configuracion/>}/>
        <Route path="/crearcliente" element={<CrearCliente/>}/>
        <Route path="/proveedores" element={<Listaproveedores/>}/>
        <Route path="/crearproveedor" element={<CrearProveedor/>}/>
        <Route path="/creararticulo" element={<CrearArticulo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
