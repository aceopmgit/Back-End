const https=require('http');

const routes=require('./011.1Ex-Routes.js')

//console.log(routes.someText);


const server=https.createServer(routes)

server.listen(4000);