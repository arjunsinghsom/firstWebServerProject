const http = require('http');
const hostname = '127.0.0.1';

const port = 5000;
http.createServer((req, res)=> {
    res.writeHead(200, 'success ')
    res.end('hello world')
})
.listen(port, hostname,()=> {
    console.log(`app is running at http://${hostname}:${port}/`)
} )