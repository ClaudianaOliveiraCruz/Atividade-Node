const http = require('http');

let server = http.createServer((request, response) => {
   
    console.log("URL" , request.url);
    console.log("METHOD" , request.method);

    switch (request.url){

        case '/': 

            response.statusCode=200;
            response.setHeader('Content-Type','text/html' );
            response.end('<h1>Aula Node</h1>');
            break;

        case '/users': 

            response.statusCode=200;
            response.setHeader('Content-Type','text/json' );

            response.end(JSON.stringify({

                user: [{
                    name: 'Aula node',
                    turma: 'ADS Tarde',
                    disciplina: 'Programação web',
                    id: 1
                }]


            }

            ));
            
            break;


    }


});

server.listen(3000, '127.0.0.1', () => {
    console.log("Servidor rodando");
});