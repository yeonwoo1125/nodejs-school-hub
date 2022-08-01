const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('port', process.env.PORT || 4444);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(static(path.join(__dirname, 'views')));

app.use('/', router);
router.route('/').get((req, res) => {
    res.render('memo.html');
});

router.route('/memos').post((req, res) => {
    const name = req.body.name;
    const date = req.body.date;
    const content = req.body.content;

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>나의 메모</h1>');
    res.write('<p>작성자 : ' + name + '</p>');
    res.write('<p>작성일시 : ' + date + '</p>');
    res.write('<p>내용 : ' + content + '</p>');
    res.write('<a href="/"><button type="submit">다시 작성 버튼</button></a>');
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('http://localhost:4444/')
});