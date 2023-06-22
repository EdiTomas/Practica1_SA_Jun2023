const mysql = require('mysql')

const conexion = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'DBTEST'
}

);


const Conectar = () => {

conexion.connect( err => {

    if(err) throw err
    console.log("conectado a la DB");

})

}

module.exports = {

Conectar,

conexion

}  