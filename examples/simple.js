var http = require('http')
  , proxy = require('..')

var server = http.createServer(function (res, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, tcpproxy.\n')
}).listen(9000)

server.on('listening', function () {
  console.log('Server listening on', server.address(), '\n')
  console.log('Original server:  curl http://localhost:9000')
  console.log('Proxied server:   curl http://localhost:8080')
})

proxy(8080, 9000)
