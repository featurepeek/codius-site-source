var express = require('express')
var fs = require('fs')

var app = express()

app.use(express.static('.'))

app.get('/', function (req, res) {
  fs.readFile(__dirname + '/web/index.html', { encoding: 'utf8' }, function (error, buffer) {
  	if (error) return res.status(404).end()
  	res.send(buffer)
  })
})

app.get('/docs', function(req, res) {
	res.redirect('/docs/using-codius/getting-started')
})

app.get('/blog', function(req, res) {
	res.redirect('https://medium.com/coil')
})

app.get('/*', function (req, res) {
  var urlPath = req.originalUrl.replace(/\/+$/g, '')
  // if (urlPath.charAt(urlPath.length - 1) === '/') {
  // 	urlPath = urlPath.substring(0, urlPath.length - 1)
  // }
  console.log(__dirname, urlPath, '.html')
  fs.readFile(__dirname + '/web' + urlPath + '.html', { encoding: 'utf8' }, function (error, buffer) {
  	if (error) return res.status(404).end()
  	res.send(buffer)
  })
})


app.listen(8080)