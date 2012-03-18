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

module.exports = function createProxy (source, destination) {
  return new Proxy(source, destination)
}

/**
 * Proxy.
 */

function Proxy (source, destination) {
  var self = this
  this.source = parse(source)
  this.destination = parse(destination)
  this.proxy = net.createServer(function (connection) {
    var client = net.connect(self.destination.port, self.destination.address);
    connection.pipe(client)
    client.pipe(connection)
  })
  this.proxy.listen(this.source.port, this.source.address)
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

