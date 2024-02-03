const http = require('http')
http.createServer((req,res)=>{
res.write('<h1>server is created</h1>')
res.end()
}).listen(3000)