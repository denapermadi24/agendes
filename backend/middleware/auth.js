var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../respon');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk register
exports.registrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["admin", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["admin"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Registrasi Berhasil", res);
                    }
                });
            } else {
                response.ok("Maaf, Email sudah terdaftar!", res);
            }
        }
    })
}

//controller untuk login
exports.login = function (req, res) {
    var post = {
        email: req.body.email,
        password: req.body.password
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["admin", "email", post.email, "password", md5(post.password)];

    query = mysql.format(query, table);
    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 1) {
                var token = jwt.sign({ rows }, config.secret, {
                    expiresIn: 1440
                });
                id_admin = rows[0].id_admin;

                var data = {
                    id_admin: id_admin,
                    akses_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token_admin"];

                query = mysql.format(query, table);
                connection.query(query, data, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.json({
                            success: true,
                            message: 'Token JWT tergenerate!',
                            token: token,
                            currUser: data.id_admin
                        });
                    }
                });
            } else {
                res.json({"Error": true, "Message":"Email atau password anda salah!"});
            }
        }
    });
}