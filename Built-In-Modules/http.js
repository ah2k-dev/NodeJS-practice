const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello from the server</h1>')
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url==='/about'){
        res.end('About Page')
    }
})

server.listen(5000);