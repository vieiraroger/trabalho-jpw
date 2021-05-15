var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/models/livroModel');
pessoa = require('./api/models/pessoaModel');
serie = require('./api/models/serieModel');
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('SEU CODIGO MONGO DB AQUI');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var ns_livro = require('./api/routes/livroRoutes');
var ns_pessoa = require('./api/routes/pessoaRoutes');
var ns_serie = require('./api/routes/serieRoutes');

ns_livro(app);
ns_pessoa(app);
ns_serie(app);

app.use(function (req,res,next){
	res.status(404).json({"Error": "Page not founded"});
});

app.listen(port);