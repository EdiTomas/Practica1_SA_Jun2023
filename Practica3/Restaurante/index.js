const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pedido =require('../Almacenamiento/index.js')
const logger = require("./logger");
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

    for(let i=0;i<pedido.pedido.length;i++){
        if(pedido.pedido[i].Codigo===body.Codigo){
            pedido.pedido[i].Estado=1;
            pedido.pedido[i].Repartidor="Alejandro1";
            logger.info( "Post, El pedido se ha recibido, en la ruta '/RecibirPedidoRestaurante'"); //debug level as first param
            res.send({success:true,
                sms:'El pedido se ha recibido'})
        }      
    }
    logger.error('No se encontrado ningun Pedido en la ruta /Recibido')
   
    res.send({success:false, sms:'No se encontrado ningun Pedido'})
    })

app.get('/InformacionPedido', (req, res) => {
    
    for(let i=0;i<pedido.pedido.length;i++){
            switch(pedido.pedido.Estado){
                case 0:
                    res.send({success:true,
                        sms:'El pedido no se ha realizado'})
                        logger.info( "Get, El pedido se ha recibido, en la ruta '/RecibirPedidoRestaurante'"); //debug level as first param
                    
                return;
                case 1:
                    logger.info( "Get, El pedido se ha recibido, en la ruta '/RecibirPedidoRestaurante'"); //debug level as first param
                    
                    res.send({success:true,
                        sms:'El pedido esta en proceso'})
                   
                return;
                case 2:
                    logger.info( "Get, El pedido se ha recibido, en la ruta '/RecibirPedidoRestaurante'"); //debug level as first param
                        
                    res.send({success:true,
                        sms:'El pedido se enviado el pedido'})
                   
                return;
                case 3:
                    logger.info( "Get, El pedido se ha recibido, en la ruta '/RecibirPedidoRestaurante'"); //debug level as first param
                    res.send({success:true,
                        sms:'Se ha entregado el pedido'})
                   
                return;
            }
            
            
              
    }
    logger.error('No se encontrado ningun Pedido en la ruta /InformacionPedido')
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})

app.get('/VerficarEstadoRepartidor', (req, res) => {
  
    for(let i=0;i<pedido.pedido.length;i++){
        res.send({success:true,
            sms:pedido.pedido})
  
    }
    logger.error('No se encontrado ningun Pedido en la ruta /VerficarEstadoRepartidor')
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})