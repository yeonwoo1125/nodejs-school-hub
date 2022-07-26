/*console.log(__filename);
console.log(__dirname);
console.log('%d',123);
console.log('%j',{name : 'time'});

console.log('\u001b[0m','hello');*/

/*console.time('mirim');
let output = 0;
for(let i=0; i<100; i++)
    output+=i;
process.exit();
console.log(output);
console.timeEnd('mirim');*/

/*if(1){
    var x = 10;
}
console.log(x);

if(1){
    const y = 10;
    console.log(y);
}*/
//console.log(y); 에러 발생 - 범위 벗어남

/*var x = 10;
console.log(10);
const y = 100;
//y=200; const 는 상수
console.log(y);
let z = 1000;
console.log(x);*/

/*const n1 = 100;
const n2 = 200;
const str = `${n1} ${n2} ${n1+n2}`;
console.log(str);*/

/*const helloWorld = () => {
    console.log('Hello World');
    helloNode();
}
const helloNode = () => {
    console.log('Hello Node');
}

helloWorld();

const add1 = function (x, y) {
    return x+y;
}

const add2 = (x,y) => x+y

console.log(add1(1,2));
console.log(add2(4,5));*/

//비동기식 방식이기 때문에 백그라운드에서 작업하는 I/O가 나중에 처리됨 -> 상대적으로 순서가 느리기 때문
/*
const fs = require('fs');
fs.readFile('./sam.txt', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});
console.log('다른 작업중');*/

/*const {odd, even} = require('./module01');*/
/*
const check = (n) => n%2  ? odd : even;

console.log(check(100));*/

const c = console.log;
/*const checkString = (str) => str.length %2 ? odd : even;
c(checkString('hello'));

c(module.exports === exports);*/
/*const ddd = require('./module01');
c(ddd);*/
/*const {area, abs} = require('./module01');
c(area(11));
c(abs(-1111));*/

//const os = require('os');
//c(os.arch());
//c(os.cpus());
//c(os.freemem());
//c(os.release());
//c(os.hostname());

/*const path = require('path');
c(__dirname);
c(__filename);
c(path.sep);
c(path.delimiter);
c(path.extname('app01.txt'));*/

/*const url = require('url');
const querystring = require('querystring');
const {URL} = url;*/
/*const myURL = new URL('https://www.e-mirim.hs.kr/main.do?name=yeonwoo');
c(myURL.searchParams);*/

/*const parsedURL = url.parse('https://www.e-mirim.hs.kr/schoollife/food.do');
c(parsedURL);*/
/*
const parseUrl = url.parse('https://www.youtube.com/results?search_query=%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80');
const query = querystring.parse(parseUrl.query);
c(query);
c(querystring.stringify(query));*/

/*const crypto = require('crypto');
c(crypto.createHash('sha512').update('123').digest('base64'));
c(crypto.createHash('md5').update('123').digest('hex'));
c(crypto.createHash('sha512').update('123').digest('hex'));
c(crypto.createHash('md5').update('123').digest('base64'));*/

//const fs = require('fs');
/*fs.readFile('./sam.txt').then(d => {
    c(d);
    c(d.toString());
})
.catch(err=> {
    throw new Error(err);
});*/

//동기/비동기 메서드
/*
* 매번 순서가 다르게 실행
* 동기/비동기 - 백그라운드 작업 완료 확인 여부
* 블록킹/논블록킹 - 함수가 바로 리턴되는지 여부
* */

//동기식 파일 읽기
//이전 작업이 완료되어야 다음 작업 진행 가능
/*c('시작');
let data = fs.readFileSync('./sam.txt');
c('1 ',data.toString());
data = fs.readFileSync('./sam.txt');
c('2 ',data.toString());
data = fs.readFileSync('./sam.txt');
c('3 ',data.toString());
c('끝');*/

//비동기식 파일 읽기
//실행될때마다 순서가 다름
/*c('시작');
fs.readFile('./sam.txt',(err, data)=>{
    if(err) throw err;
    c('1 ',data.toString());
});
fs.readFile('./sam.txt',(err, data)=>{
    if(err) throw err;
    c('2 ',data.toString());
});
fs.readFile('./sam.txt',(err, data)=>{
    if(err) throw err;
    c('3 ',data.toString());
});
c('끝');*/

//콜백지옥
/*fs.readFile('./sam.txt',(err, data)=>{
    if(err) throw err;
    c('1 ',data.toString());
    fs.readFile('./sam.txt',(err, data)=>{
        if(err) throw err;
        c('2 ',data.toString());
        fs.readFile('./sam.txt',(err, data)=>{
            if(err) throw err;
            c('3 ',data.toString());
        });
    });
});*/

//콜백지옥 탈출
//프로미스를 통해 가능
//실행은 됐지만 결과는 반환 안된 객체
//then -> 결과 반환, catch -> error 처리, finally -> 무조건 실행
/*const con = true;
const promise = new Promise((resolve, reject) => {
    if (con) resolve('성공');
    else reject('실패');
});

promise
    .then(msg => {
        c(msg);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        c('무조건 실행');
    });*/
/*const fs = require('fs').promises;
c('start');
fs.readFile('./sam.txt')
    .then(data => {
        c('1', data.toString())
        return fs.readFile('./sam.txt');
    })
    .then(data => {
        c('2', data.toString())
        return fs.readFile('./sam.txt')
    })
    .then(data => {
        c('3', data.toString())
    })
c('end');*/

//이벤트 처리
/*
* event 모듈을 사용해 객체를 가져온 후 할당
* on - 이벤트 이름과 발생시의 콜백을 연결, 여러개의 이벤트 할당 가능
* addListener - on과 같은 기능
* emit - 이벤트 호출
* removeAllListener, removeListener - 이벤트에 연결된 Listener 삭제
* listenerCount - 현재 연결된 리스너의 개수
* */
/*

const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('event1',()=>{
    c('이벤트1');
});
myEvent.addListener('event2',()=>{
    c('이벤트2');
})
myEvent.addListener('event2',()=>{
    c('이벤트2 추가');
})
myEvent.once('event2',()=>{
    c('이벤트3');
})
myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');
c(myEvent.listenerCount('event1'));
c(myEvent.listenerCount('event2'));
myEvent.removeAllListeners('event3');
c(myEvent.emit('event3'));*/

//에러처리
/*
* 처리하지 못한 에러
* */

/*
setInterval(()=>{
    c('start');
    try{
        throw new Error('err');
    }catch (err){
        console.error(err);
    }
},1000)*/

//비동기식 에러처리
/*const fs = require('fs');
setInterval(()=>{
    fs.unlink('./sam1.txt', err=>{
        if(err) console.error(err);
    })
},1000);*/

//예측 불가능한 에러처리
//에러 내용 기록용
//최후의 수단

process.on('uncaughtException', err=>{
    console.error('예기치 못한 에러', err);
});

setInterval(()=>{
    throw new Error('에러')
},1000)