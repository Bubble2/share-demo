const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//先走强缓存，强缓存没有就走协商缓存
app.get('/', (req, res) => {
	let htmlPath = path.resolve(__dirname, './static/index.html');
	const html = fs.readFileSync(htmlPath, 'utf8');
	res.writeHead(200, {
		'Content-type': 'text/html'
	})
	res.end(html);
  });

app.get('/favicon.ico', (req, res) => {
	let icoPath = path.resolve(__dirname, './static/favicon.ico');
	let cont = fs.readFileSync(icoPath);
	res.end(cont)
})

app.get('/demo.js', (req, res) => {
	let jsPath = path.resolve(__dirname, './static/js/demo4.js')
	let cont = fs.readFileSync(jsPath, 'utf8');
	let status = fs.statSync(jsPath)

	let lastModified = status.mtime.toUTCString()
	if (lastModified === req.headers['if-modified-since']) {
		res.writeHead(304, 'Not Modified')
		res.end()
	} else {
		res.setHeader('Cache-Control', 'public,max-age=10')
		res.setHeader('Last-Modified', lastModified)
		res.writeHead(200, 'OK')
		res.end(cont)
	}
})

app.listen(9090, () => {
	console.log('Server is running at http://localhost:9090')
});
