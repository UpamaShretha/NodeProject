// const fs = require("fs");
// fs.readFile("Hello.txt",function(err,content){
//     console.log(content);
// })


//for printing exact text of the file
// const fs = require("fs");
// fs.readFile("Hello.txt","utf-8",function(err,content){
//     console.log(content);
// })

//showing inside the browser
const http  = require ('http');
const fs = require ('fs');

const server = http.createServer(function(req,res){
    const url = req.url;
    let filePath;
    if(url ==='/'){
        filePath ='index.html';
    }else if(url === '/about'){
        filePath = 'about.html';
    }
    else{
        filePath = '404.html';
    }
    fs.readFile(filePath,"utf-8",function(error,content){
        if(error){
            res.end('Server Error');
        }else{
            res.end(content);
        }
    })
})
server.listen(5000);
