const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const moment = require('moment');
const md5 = require('md5');

//直接走协商缓存
function getGLNZ() {
	return moment().utc().add(1, 'm').format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT';
}

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
	let jsPath = path.resolve(__dirname, './static/js/demo3.js');
	let cont = fs.readFileSync(jsPath, 'utf8');
	let etag = md5(cont);

	if (req.headers['if-none-match'] === etag) {
		res.writeHead(304, 'Not Modified');
		res.end();
	} else {
		res.setHeader('ETag', etag);
		res.writeHead(200, 'OK');
		res.end(cont);
	}
})

app.listen(9090, () => {
	console.log('Server is running at http://localhost:9090')
});
