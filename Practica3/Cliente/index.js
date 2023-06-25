const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pedido =require('../Almacenamiento/index.js')
const logger = require("./logger");
const app = express()
const port = 3000

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

app.post('/Pedido', (req, res) => {
    const body = req.body;
    pedido.pedido.push(body);
    logger.info( "Post, Este es la ruta del pedido '/Pedido'  "); //debug level as first param
    res.send({success:true,sms:'El pedido se ha registrado exitosmane'})
})

app.post('/VerficarPedido', (req, res) => {
    const body = req.body;
    
    for(let i=0;i<pedido.pedido.length;i++){
        if(pedido.pedido[i].Codigo===body.Codigo){
            switch(pedido.pedido[i].Estado){
                case 0:
                    logger.info("Post, se esta verificando el proceso de pedido"); //debug level as first param
      //              logger.log("The is the Pedido '/VerficarPedido' route.");
                    res.send({success:true,
                        sms:'El pedido no se ha realizado'})
                    return;
                //break;
                case 1:
                        res.send({success:true,
                        sms:'El pedido esta en proceso'})
                        logger.info( "Post, el pedido esta en proceso"); //debug level as first param
        //                logger.log("The is the Pedido '/VerficarPedido' route.");
                        return; 
                //break;
            }
            
            
        }      
    }
    logger.error('No se encontrado ningun Pedido')
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})

app.post('/VerficarEstadoRepartidor', (req, res) => {
    const body = req.body;
    for(let i=0;i<pedido.pedido.length;i++){
        if(pedido.pedido[i].Codigo===body.Codigo){
            switch(pedido.pedido[i].Estado){
                case 2:
                    res.send({success:true,
                        sms:'El pedido se enviado el pedido'})
                        logger.info( "Post El pedido se enviado el pedido en la ruta '/VerficarPedido'"); //debug level as first param
                    //    logger.log("El estado del repartidor '/VerficarEstadoRepartidor' route.");
                      //  logger.log("El estado del pedido se encuentra en la ruta '/VerficarPedido'.");
                        
                return;
                case 3:
                    res.send({success:true,
                        sms:'Se ha entregado el pedido'})
                        logger.info( "Post, Se ha entregado el pedido en la ruta '/VerficarPedido'"); //debug level as first param
                      //  logger.log("El estado del pedido se encuentra en la ruta '/VerficarPedido'.");
                       
                return;   
            }
         break;   
            
        }      
    }

    logger.error('No se encontrado ningun Pedido en la ruta /VerficarPedido')
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})