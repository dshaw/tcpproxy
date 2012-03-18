# tcpproxy

A simple Node.js TCP Proxy.

## Before you start

Do you really need this module? Perhaps you don't. Much of this module can be accomplished with 5 lines of Node.js code. Do yourself a favor and check out the underlying Node plumbing and play with that first.

	var net = require('net')
	
	var proxy = net.createServer(function (connection) {
	  var client = net.connect(port, address);
	  connection.pipe(client);
	  client.pipe(connection);
	}).listen(proxyPort, proxyAddress);

## Usage

	var proxy = require('tcpproxy')
	
	proxy(8080, 9000)
	proxy(127.0.0.1:8080, 127.0.0.1:9000)
	proxy(localhost:8080, localhost:9000)

## License 

(The MIT License)

Copyright (c) 2012 Daniel D. Shaw <dshaw@dshaw.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.