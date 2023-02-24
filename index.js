let http = require('http');
let express = require('express');
let port = process.env.PORT || 8080;
let app = express();
let appRoutes = require('./routes/appRoutes');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');



mongoose.connect('mongodb://localhost/crudapp', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);


http.createServer(app).listen(port);

console.log("Backend running on port:", port);