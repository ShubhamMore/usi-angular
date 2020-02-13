//Install express server
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ULTRA-SPORTS-INDIA'));

app.get('/*', function(req, res) {
  const url = path.join(__dirname, 'dist', 'ULTRA-SPORTS-INDIA', 'index.html');
  res.sendFile(url);
});

const server = http.createServer(app);

// Start the app by listening on the default Heroku port
server.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
