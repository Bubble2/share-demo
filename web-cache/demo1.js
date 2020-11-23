const express = require('express');
const fs = require('fs');
const path = require('path');
const app= express();

//无缓存

app.get('/', (req, res) => {
  let htmlPath = path.resolve(__dirname, './static/index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  res.writeHead(200, {
      'Content-type': 'text/html'
  })
  res.end(html);
});

// 不加缓存信息
app.get('/demo.js',(req, res)=>{
  let cssPath = path.resolve(__dirname, './static/js/demo1.js');
  let cont = fs.readFileSync(cssPath, 'utf8');
  res.end(cont);
})

app.get('/favicon.ico',(req, res)=>{
  let icoPath = path.resolve(__dirname,'./static/favicon.ico');
  let cont = fs.readFileSync(icoPath);
  res.end(cont)
})

app.listen(9090, ()=>{
    console.log('Server is running at http://localhost:9090')
});
