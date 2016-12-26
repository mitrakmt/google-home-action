'use strict';

process.env.DEBUG = 'actions-on-google:*';

let ActionsSdkAssistant = require('actions-on-google').ActionsSdkAssistant;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json({type: 'application/json'}));

// Create an instance of ActionsSdkAssistant
app.post('/', function (request, response) {
  const assistant = new ActionsSdkAssistant(
    {request: request, response: response});

// Create functions to handle requests here
function mainIntent (assistant) {
  let inputPrompt = assistant.buildInputPrompt(false,
    'Hi! Say something, and I\'ll repeat it');
  assistant.ask(inputPrompt);
}

function respond (assistant) {
  let inputPrompt = assistant.buildInputPrompt(false,
    'Hi! Say something, and I\'ll repeat it.');
  assistant.ask(inputPrompt);
}

let server = app.listen(app.get('port'), function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
})