import React, { Component } from "react";
import Documentos from './documentos/documentos'


export default class Principal extends Component {
  imprimir = ()=>{
    console.log("probando clases")
  }
  render() {
    return (
      <div>
        <Documentos/>
        
        
      </div>
    );
  }
}
