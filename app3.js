//세션
/*
* 웹서버에 저장되는 정보
* 요청 객체에 세션 설정하면 유지
* 웹브라우저에서도 쿠키 저장
* 웹브라우저에서 웹서버로 요청할 때 쿠키 정보 전송
* 세션 정보 확인 -> req.session.세션 이름
* */

const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require("body-parser");
const multer = require("multer");
const expressErrorHandler = require("express-error-handler");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.set('port', process.env.PORT || 4444);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/public',static(path.join(__dirname,'public')));
app.use(static(path.join(__dirname, 'views')));

const errorHandler = expressErrorHandler({
    static : {
        '404' : './public/404error.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
app.use(expressSession({
    secret: 'mellong',
    resave: true,
    saveUninitialized: true
}));

app.use('/process', router);

router.route('/login').post((req, res) => {
    console.log('/process.login 라우팅 함수 받음');
    const parmaId = req.query.id || req.body.id;
    const paramPw = req.query.pw || req.body.pw;
    console.log('요청 파라미터 : ' + parmaId + ' : ' + paramPw)

    if(req.session.user){
        console.log('이미 로그인 상태')
        res.redirect('/score.html')
    }
    else{
        req.session.user = {
            id:parmaId,
            name: '홍길동'
        }
    }


    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>로그인 성공</h1>');
    res.write('<p>' + parmaId + '</p>' + '<p>' + paramPw + '</p>');
    res.write('<a href="/process/score"> 성적확인하기</a>');
    res.end();
});

router.route('/logout').get(function (req, res){
    console.log('logout')
    if(req.session.user){
        console.log('로그아웃 합니다')
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션을 삭제하고 로그아웃되었습니다.')
            res.redirect('/login.html')
        })

    }
    else {
        console.log('아직 로그인되어 있지 않습니다.')
        res.redirect('/login.html')
    }
});

router.route('/score').get((req, res) => {
    if(req.session.user){
        res.redirect('/score.html');
    }else{
        res.redirect('/login.html')
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'upload');
    },
    filename : function (req, file, callback) {
        callback(null, Date.now()+ file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        files: 10,
        fileSize: 1024 * 1024 * 1024
    }
});

router.route('/photo').post(upload.array('photo',1), (req, res)=>{
    const files = req.files;
    console.log(files);

    if(files.length <= 0) console.log('파일 없음');
    else {
        console.dir(files[0]);
        let oriName = '';
        let fileName = '';
        let mimeType = '';
        let size = 0;

        if(Array.isArray(files)){
            for(let i=0; i<files.length; i++){
                oriName = files[i].originalname;
                fileName = files[i].filename;
                mimeType = files[i].mimeType;
                size = files[i].size;
            }
        }
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        res.write('<h1>파일업로드 성공</h1>');
        res.write('<h3>'+oriName+'</h3>');
        res.write('<h3>'+fileName+'</h3>');
        res.end();
    }
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('http://localhost:4444/')
});