const fs = require('fs')
const ejs = require('ejs')
const mysql = require('mysql')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const e = require("express");

const app = express()
app.set('port', process.env.PORT || 4444);
app.use(bodyParser.urlencoded({extended: false}));

const client = mysql.createConnection({
    user: 'root',
    password: 'yeanwoo0619',
    database: 'company'
})

app.get('/', function (req, res) {
    fs.readFile('views/personList.html', 'utf-8', function (err, data) {
        client.query('select * from person', function (err, results) {
            if(err) console.error(err);
            res.send(ejs.render(data, {
                data: results
            }));
        })
    })
});

app.get('/delete/:id', (req, res) => {
    client.query('delete from person where id=?', [req.params.id], (err, results) => {
        if(err) console.error(err);
        res.redirect('/');
    })
});

app.post('/insert', (req, res) => {

    client.query('insert into person(name, age, married) values(?,?,?);',
        [req.body.name, req.body.age, req.body.married], (err, results) => {
        if(err) console.error(err);
        res.redirect('/');
    })
});

app.get('/update/:id', (req, res) => {
    fs.readFile('views/personUpdate.html', 'utf-8', (err, data) => {
        const id = req.params.id*1;
        client.query('select * from person where id=?',[id], function (err, results) {
            if(err) console.error(err);
            res.send(ejs.render(data, {
                data: results[0]
            }));
        })

    });
})

app.post('/update/:id', (req, res) => {
    const body = req.body;
    client.query('update person set name=?, age=?, married=?, created_at=? where id=?;',
        [body.name, body.age, body.married, body.created_at],
        function (err, results) {
            if (err) console.error(err);
            res.redirect('/')
        });

})

http.createServer(app).listen(app.get('port'), function () {
    console.log('http://localhost:4444');
});