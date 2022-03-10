const mongoose = require('mongoose')

const URI = 'mongodb://localhost/erp-taller'

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('database is connected')
})