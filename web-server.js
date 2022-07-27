const http = require('http');
const fs = require('fs');
const url = require('url');

/*http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    const pathName = url.parse(req.url).pathname;

    switch (pathName){
        case '/' : {
            fs.readFile('views/web.html',(err,data)=>{
                if(err) throw new Error('파일 읽기 실패');
                res.end(data);
            });
            break;
        }
        case '/html' : {
            fs.readFile('views/1.html',(err,data)=>{
                if(err) throw new Error('파일 읽기 실패');
                res.end(data);
            });
            break;
        }
        case '/css' : {
            fs.readFile('views/2.html',(err,data)=>{
                if(err) throw new Error('파일 읽기 실패');
                res.end(data);
            });
            break;
        }
        case '/js' : {
            fs.readFile('views/3.html',(err,data)=>{
                if(err) throw new Error('파일 읽기 실패');
                res.end(data);
            });
            break;
        }
    }
}).listen(4444,()=>{
    console.log('http://localhost:4444/');
});*/

/*
http.createServer((req, res)=>{
    let url = req.url;
    if(req.url === '/') url = '/index.html';
    if(req.url === '/other.html') res.writeHead(404);

    res.writeHead(200);
    res.end(fs.readFileSync(__dirname+url));
}).listen(4444,()=>{
    console.log('http://localhost:4444/');
});*/

/*
http.createServer((req, res)=>{
    let u = req.url;
    switch (req.url){
        case '/' : u = '/views/web.html'; break;
        case '/html' : u = '/views/1.html'; break;
        case '/css' : u = '/views/2.html'; break;
        case '/js' : u = '/views/3.html'; break;
    }

    res.writeHead(200);
    console.log(__dirname+url);
    res.end(fs.readFileSync(__dirname+u));
}).listen(4444,()=>{
    console.log('http://localhost:4444/');
});*/
