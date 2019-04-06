const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    if(request.url.startsWith("/public/")){
        // получаем путь после слеша
        var filePath = request.url.substr(1);
        fs.readFile(filePath, function(error, data){
			
            if(error){
                     
                response.statusCode = 404;
                response.end("Resourse not found!");
            }
	
			if (filePath.split(".")[1] == "css"){
				response.setHeader("Content-Type", "text/css");
                response.end(data);
			}
            else{
                response.setHeader("Content-Type", "text/html");
                response.end(data);
            }
        })
    }
    else{
        // во всех остальных случаях отправляем строку hello world!
        response.end("Hello World!");
    }
}).listen(3000);