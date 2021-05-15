var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/models/livroModel');
pessoa = require('./api/models/pessoaModel');
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('SEU CODIGO MONGO DB AQUI');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var ns_livro = require('./api/routes/livroRoutes');
var ns_pessoa = require('./api/routes/pessoaRoutes');
ns_livro(app);
ns_pessoa(app);

app.listen(port);