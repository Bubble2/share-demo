const express = require('express');
const fs = require('fs');
const path = require('path');
const app= express();

const moment = require('moment');


//直接走强缓存

function getGLNZ(){
  return moment().utc().add(10,'d').format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT';
}

app.get('/', (req, res) => {
  let htmlPath = path.resolve(__dirname, './static/index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  res.writeHead(200, {
      'Content-type': 'text/html'
  })
  res.end(html);
});

app.get('/favicon.ico',(req, res)=>{
  let icoPath = path.resolve(__dirname,'./static/favicon.ico');
  let cont = fs.readFileSync(icoPath);
  res.end(cont)
})

// 强缓存 - Expires
app.get('/demo.js',(req, res)=>{
  let jsPath = path.resolve(__dirname,'./static/js/demo2.js');
  let cont = fs.readFileSync(jsPath, 'utf8');
  res.setHeader('Expires', getGLNZ())
  // res.setHeader('Cache-Control', 'public,max-age=10') // 10s
  res.end(cont)
})

app.listen(9090, ()=>{
    console.log('Server is running at http://localhost:9090')
});
