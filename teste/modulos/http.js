const http = require('http');

const port = '8080';

//const server = http.createServer((req, res) => {
  //  if(req.url === '/home') {
    //    res.writeHead(200, { "Content-Type": "text/html" });
      //  res.end("<h1>PAGINA INICIAL</h1>");
   // };

   // if (req.url === "/usuario"){
     //   const usuario = [
        //    {
       //         nome: "Oscar Gomes",
         //       idade: "41",
          //  },
           // {
            //    nome: "Carlos Silva",
             //   idade: "80",
           // }
       // ]
       // res.writeHead(200, { "Content-Type": "application/json" });
       // res.end(JSON.stringify(usuario));   
   // };
    
//});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));