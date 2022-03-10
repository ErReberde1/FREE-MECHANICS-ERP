import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navegacion from './componentes/navegacion';
import ListaClientes from './componentes/listaclientes';
import CrearCliente from './componentes/crearcliente';
import Principal from './componentes/principal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/clientes" element={<ListaClientes/>}/>
        <Route path="/crearcliente" element={<CrearCliente/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
