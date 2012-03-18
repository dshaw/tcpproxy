var proxy = require('..')

proxy(8080, 'google.com:80', function () {
  console.log('Proxied connection at http://localhost:8080')
}, function () {
  console.log(arguments, 'Proxied connection')
})

proxy(8443, 'google.com:443', function () {
  console.log('Proxied SSL connection at https://localhost:8443')
}, function () {
  console.log(arguments, 'Proxied SSL connection')
})


