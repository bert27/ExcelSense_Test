const express = require('express');
var app = module.exports = express();
app.use(express.json());
const path = require('path')
var colors = require('colors');
const fetch = require('node-fetch');

module.exports.servidor = {
   path: path,
	 app: app,
	express: express,


Arranca: function() {
const port=4000;
app.listen(port,'0.0.0.0', () =>
 console.log('Server Start'.cyan));
},
Entities: function() {
var url='https://6y458uslg3.execute​-api.eu-west-3.amazonaws.com/elixos/entities';

    app.get('/endpoints/Entities', (req, res) => {
    console.log("Enviando Entities");
    fetch(url)
      .then(res => res.json())
      .then(json =>
             res.send(json)
       );
  });

},
Assets: function() {
// console.log('Excel Sense'.cyan);
var url='https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/assets';

    app.get('/endpoints/Assets', (req, res) => {
    console.log("Enviando Assets");
    fetch(url)
      .then(res => res.json())
      .then(json =>
             res.send(json)
       );
  });
},



};
