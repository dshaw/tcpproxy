/*!
 * tcpproxy
 * Copyright(c) 2012 Daniel D. Shaw <dshaw@dshaw.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var net = require('net')

/**
 * Exports.
 */

module.exports = function createProxy (source, destination, listeningListener, connectListener) {
  source = parse(source)
  destination = parse(destination)
  var proxy = net.createServer(function (connection) {
    var client = net.connect(destination.port, destination.address, connectListener);
    connection.pipe(client)
    client.pipe(connection)
  })
  proxy.listen(source.port, source.address, listeningListener)
  return proxy
}

// From node net
function toPort(x) { return (x = Number(x)) >= 0 ? x : false; }

function parse (options) {
  var server = { port: toPort(options) }
  if (!server.port) {
    if (typeof options === 'string') {
      var s = options.split(':')
      server.address = s[0]
      server.port = s[1]
    } else {
      server = options
    }
  }
  return server
}

