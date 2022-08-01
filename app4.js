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
    fs.readFile('views/list.html', 'utf-8', function (err, data) {
        client.query('select * from products', function (err, results) {
            res.send(ejs.render(data, {
                data: results
            }));
        })
    })
});

app.get('/delete/:id', (req, res) => {
    client.query('delete from products where id=?', [req.params.id], () => {
        res.redirect('/');
    })
});

app.post('/insert', (req, res) => {
    client.query('insert into products(name, modelnumber, series) values(?,?,?);', [req.body.name, req.body.modelnumber, req.body.series], () => {
        res.redirect('/');
    })
});

app.get('/update/:id', (req, res) => {
    fs.readFile('views/updateForm.html', 'utf-8', (err, data) => {
        console.log(req.params.id)
        client.query('select * from products where id=?'[req.params.id], function (err, results) {
            console.log(results)
            res.send(ejs.render(data, {
                data: results[0]
            }));
        })

    });
})

app.post('/update/:id', (req, res) => {
    const body = req.body;
    client.query('update products set name=?, modelnumber=?, series=? where id=?;',
        [body.name, body.modelnumber, body.series, req.params.id],
        function (err, results) {
            if (err) console.error(err);
            res.redirect('/')
        });

})

http.createServer(app).listen(app.get('port'), function () {
    console.log('http://localhost:4444');
});