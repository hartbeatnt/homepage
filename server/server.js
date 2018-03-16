global.__base = __dirname+"/";
const env = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const server = require('http').Server(app);

const router = require('./routers/_index');

env.config({path: __base+"./config/.env"});
env.load();

app.use(morgan("common")); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true  })); 

app.use(express.static(process.env.dev ? 'public' : 'dist'));
app.use('/', router);

server.listen(process.env.PORT || 8080, function () {
		console.log(`Listening on port ${process.env.PORT || 8080}!`);
		
});