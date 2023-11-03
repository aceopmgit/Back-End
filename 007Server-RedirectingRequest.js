const https=require('http');
const fs=require('fs');
const server=https.createServer((req,res)=>{
   const url=req.url;
   const method=req.method;
    if(url==="/"){
        
        res.write('<html>')
        res.write('<head><title>EnterMessage</title></head>')
        res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();

    }
    if(url==='/message' && method==='POST'){
        fs.writeFileSync('messsage.txt','Dummy');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello form my Node.js Server</h1> </body>')
    res.write('</html>')
    res.end();
})

server.listen(4000)

//to run this code type localhost:4000 in browser