const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pedido =require('../Almacenamiento/index.js')

const app = express()
const port = 3001

app.use(cors());
app.use(morgan("dev"));
app.use(
    express.json({
        limit: "200mb",
    })
);
app.use(
    express.urlencoded({
        limit: "200mb",
        extended: true,
    })
);
app.use(
    express.text({
        limit: "200mb",
    })
);






app.get('/api1', (req, res) => {
  res.send('Se levanto un servidor 1')
})

app.post('/Recibido', (req, res) => {
    const body = req.body;


    for(let i=0;i<pedido.lenght;i++){
        if(pedido[i].Codigo ===body.Codigo){
            pedido[i].Estado = 2;
            res.send({success:true,
                sms:'El pedido se ha entregado con exito'})
            
        }
    }
res.send({success:false,
    sms:'No se encontrado ningun Pedido'})

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})