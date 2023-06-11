const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pedido =require('../Almacenamiento/index.js')

const app = express()
const port = 3002

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


app.post('/RecibirPedidoRestaurante', (req, res) => {
    const body = req.body;

    for(let i=0;i<pedido.lenght;i++){
        if(pedido[i].Codigo===body.Codigo){
                pedido[i].Estado=1;
                pedido[i].Repartidor="Alejandro1";
            res.send({success:true,
                sms:'El pedido se ha recibido'})
        }      
    }
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
   

    })

app.get('/InformacionPedido', (req, res) => {
    
    for(let i=0;i<pedido.lenght;i++){
            switch(pedido.Estado){
                case 0:
                    res.send({success:true,
                        sms:'El pedido no se ha realizado'})
                    
                break;
                case 1:
                    res.send({success:true,
                        sms:'El pedido esta en proceso'})
                   
                break;
                case 2:
                    res.send({success:true,
                        sms:'El pedido se enviado el pedido'})
                   
                break;
                case 3:
                    res.send({success:true,
                        sms:'Se ha entregado el pedido'})
                   
                break;
            }
            
            
              
    }
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})

app.get('/VerficarEstadoRepartidor', (req, res) => {
  
    for(let i=0;i<pedido.lenght;i++){
        res.send({success:true,
            sms:pedido})
  
    }
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})