const https=require('http');
const server=https.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
})

server.listen(4000)

//to run this code type localhost:4000 in browser