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

