const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

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


app.use('/api', require('./router'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})