const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pedido =require('../Almacenamiento/index.js')
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
    pedido.push(body);
    //console.log(pedido); 
    res.send({success:true,
        sms:'El pedido se ha registrado exitosmane'})
})

app.post('/VerficarPedido', (req, res) => {
    const body = req.body;
    
    for(let i=0;i<pedido.lenght;i++){
        if(pedido[i].Codigo===body.Codigo){
            switch(pedido[i].Estado){
                case 0:
                    res.send({success:true,
                        sms:'El pedido no se ha realizado'})
                    
                break;
                case 1:
                    res.send({success:true,
                        sms:'El pedido esta en proceso'})
                   
                break;
            }
            
            
        }      
    }
    res.send({success:false,
        sms:'No se encontrado ningun Pedido'})
   
})

app.post('/VerficarEstadoRepartidor', (req, res) => {
    const body = req.body;
    for(let i=0;i<pedido.lenght;i++){
        if(pedido[i].Codigo===body.Codigo){
            switch(pedido[i].Estado){
                case 2:
                    res.send({success:true,
                        sms:'El pedido se enviado el pedido'})
                   
                break;
                case 3:
                    res.send({success:true,
                        sms:'Se ha entregado el pedido'})
                   
                break;    
            }
         break;   
            
        }      
    }


})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})