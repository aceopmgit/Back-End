const https=require('http');
const server=https.createServer((req,res)=>{
   const url=req.url;
    if(url==="/home"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome home</h1> </body>')
        res.write('</html>')
        
        return res.end();

    }
    if(url==="/about"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1> </body>')
        res.write('</html>')
        
        return res.end();

    }
    if(url==="/node"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome to my Node Js project</h1> </body>')
        res.write('</html>')
        
        return res.end();

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