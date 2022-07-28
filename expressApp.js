const express = require('express');
const app = express();
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
app.set('port',process.env.PORT || 4444);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(static(path.join(__dirname,'views')));
app.use(static(path.join(__dirname,'media')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser());

/*app.use((req, res, next)=>{
    console.log('1. 미들웨어');
    const useAgent = req.header('User-Agent');
    const param = req.query;
    res.send('agent'+useAgent+'<p>'+JSON.stringify(param)+'</p>');
    res.redirect('https://www.google.com');
    req.user = 'hong';
    //req.next();
});*/
/*app.use((req, res, next)=>{
    console.log('2. 미들웨어');
    const stu = {name : 'hong',age : 11};
    res.send(stu);

});*/

/*app.use((req, res, next)=>{
    console.log('1. 미들웨어');

    const paramId = req.body.id;
    const paramPw = req.body.pw;
    res.send('id : '+paramId+" pw : "+paramPw);

});*/

/*
router.route('/process/login').post((req, res)=>{
    console.log('라우팅 함수');
    const id = req.query.id || req.body.id;
    const pw = req.query.pw || req.body.pw;
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>서버에서 로그인</h1>');
    res.write('<p>'+id+'</p>'+'<p>'+pw+'</p>');
    res.end();
});
*/

router.route('/process/login/:name').post((req, res)=>{
    console.log('라우팅 함수');
    const name = req.params.name;
    const id = req.query.id || req.body.id;
    const pw = req.query.pw || req.body.pw;
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>서버에서 로그인</h1>');
    res.write('<p>'+id+'</p>'+'<p>'+pw+'</p>'+'<p>'+name+'</p>');
    res.end();
});

router.route('/').get((req, res)=>{
    res.render('bodyParser');
})

router.route('/process/setUserCookie').get((req, res)=>{
    res.cookie('user',{
        id : 'hong',
        name : '홍길동'
    });

    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get((req, res)=>{
    res.send(req.cookies);
})


app.use('/', router);
app.all('*',(req, res)=>{
    res.status(404).send('Page Not Found');
})
http.createServer(app).listen(app.get('port'),()=>{
    console.log('http://localhost:4444/')
});

//set 서버 설정을 위한 속성 지정, get 메서드로 꺼낼 수 있음
//use 미들웨어 함수 사용
//속성이름 env : 서버 모드 설정

//미들웨어 static
//특정한 경로를 쉽게 가져와 사용 가능

//라우터
//패스를 기준으로 사용자가 요청한 기능 구분
//Router 객체를 참조한 후 route() 메서드를 이용해 라우팅

//get -> query
//post -> body
//url -> params