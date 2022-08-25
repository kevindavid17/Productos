//se realiza la importacion
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config')

//middleware
app.use(cors()); //esto es la parte nueva
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productRoutes = require('./server/routes/product.routes');
productRoutes (app);

app.listen(port, () => console.log("Server is listening at port", port));