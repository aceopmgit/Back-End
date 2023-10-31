const https=require('http');
const server=https.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello form my Node.js Server</h1> </body>')
    res.write('</html>')
    res.end();
})

server.listen(4000)

//to run this code type localhost:4000 in browser