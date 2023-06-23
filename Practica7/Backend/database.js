const mysql = require('mysql')

const conexion = mysql.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'root',
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