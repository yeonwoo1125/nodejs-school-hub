/*
const server = require('http')
    .createServer((req, res)=>{
        res.writeHead(200,{'Content-Type' : 'text/html;charset=utf-8'});
        res.write('<h1>Hello</h1>'); //start
        res.end('<p>Bye</p>') //end
    }
);

server.listen(4444, ()=>{
    console.log('4444 port에서 서버 실행중')
});

const test = () => {
    server.close();
    console.log('server close');
};

server.on('request',(code)=>{
    console.log('request on');
})

server.on('connection',(code)=>{
    console.log('connect on')
})
*/

const http = require('http');
const fs = require('fs');

/*
http.createServer((req, res) => {
    try {
        fs.readFile('./index.html', (err, data) => {
            if(err) throw new Error('파일을 읽지 못함')
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.end(data);
        });
    }catch (err){
        res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end('<p>에러 발생</p>');
    }

})
    .listen(4444, () => {
        console.log('4444 포트 대기중')
    })*/

/*http.createServer((req, res)=>{
    fs.readFile('./media/cat.jpg',(err, data)=>{
        res.writeHead(200,{'Content-Type' : 'image/jpeg;charset=utf-8'});
        res.end(data);
    })
})
.listen(4444,()=>{
    console.log('4444 포트 대기중');
})*/

/*
http.createServer((req, res)=>{
    fs.readFile('./media/yb.mp3',(err, data)=>{
        res.writeHead(200,{'Content-Type' : 'audio/mp3;charset=utf-8'});
        res.end(data);
    })
})
    .listen(4444,()=>{
        console.log('4444 포트 대기중');
    })*/

//쿠키
/*
* 키와 값이 들어있는 데이터, 이름, 값, 날짜, 경로 등의 정보 저장
* 서버와 클라이언트에서 모두 저장하고 사용 가능
* 일정기간 동안 데이터 저장 가능
* response 객체 사용시 클라이언트에 쿠키 할당
* set-cookie 속성 사용
* */
/*
http.createServer((req, res)=>{
    let date = new Date();
    date.setDate(date.getDate()+7);

    res.writeHead(200,{
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['breakfast = toast', 'dinner = chicken']
    });
    res.end('<h1>'+req.headers.cookie+'</h1>');
})
.listen(4444, ()=>{
    console.log('4444 포트 대기중')
})*/
/*http.createServer((req, res)=>{
    res.writeHead(302, {'Location' : 'https://www.e-mirim.hs.kr/main.do'});
    res.end();
}).listen(4444, ()=>{
    console.log('4444 포트에서 서버 대기 중')
})*/

const url = require('url');
/*
http.createServer((req, res)=>{
    const pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        fs.readFile('./index.html',(err, data)=>{
            if(err) throw new Error('파일을 읽지 못함');
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            res.end(data);
        })
    }
    else if(pathname === '/other'){
        fs.readFile('./other.html',(err, data)=>{
            if(err) throw new Error('파일을 읽지 못함');
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            res.end(data);
        })
    }
}).listen(4444, ()=>{
    console.log('4444 포트에서 서버 대기 중')
})*/

//서버 생성
http.createServer((req, res)=>{
    const pathName = url.parse(req.url).pathname;
    if(pathName === '/'){
        fs.readFile('views/main.html',(err, data)=>{
            if(err) throw new Error('파일을 읽지 못함');
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            res.end(data);
        });
    }
    else if(pathName === '/info'){
        fs.readFile('views/info.html',(err, data)=>{
            if(err) throw new Error('파일을 읽지 못함');
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            res.end(data);
        }) ;
    }
    else if(pathName === '/home'){
        fs.readFile('views/home.html',(err, data)=>{
            if(err) throw new Error('파일을 읽지 못함');
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            res.end(data);
        }) ;
    }
}).listen(4444, ()=>{
    console.log('4444 포트에서 서버 대기 중')
});