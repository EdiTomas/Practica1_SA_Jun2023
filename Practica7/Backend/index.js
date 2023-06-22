const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 3000
const router = express.Router();

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



//const Consult =require('./Consulta')
//router.get('/GetDatos', Consult);



app.get('/api1', (req, res) => {
  res.send('Se levanto un servidor 1')
})


app.use('/', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})