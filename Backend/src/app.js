const express = require('express');
const cors = require('cors')
const app = express()


//settings
app.set('port', 4000);


// conexion principal del servidor en puerto "port"
function main(){
    app.listen(app.get('port'));
    console.log("estas en el puerto", app.get('port'))
}

//middlewares: Capa que permite traducción de archivos con el
// servidor
app.use(cors());
app.use(express.json())

// routes

app.use('/api/cliente', require('./routes/clientes')) // el enlace localhost:4000/users devuelve "users routes"
app.use('/api/user', require('./routes/users'))
app.use('/api/proveedor', require('./routes/proveedores'))
app.use('/api/articulo', require('./routes/articulos')) 
app.use('/api/factura', require('./routes/facturas')) 
app.use('/api/presupuesto', require('./routes/presupuestos')) 

// ejecución de la función conexión al servidor.
main();

module.exports = app;