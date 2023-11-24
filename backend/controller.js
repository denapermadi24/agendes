'use strict';

var response = require('./respon');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan!", res);
}

//menampilkan semua agenda
exports.showAllAgenda = function(req, res){
    connection.query('SELECT * FROM kegiatan_desa', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};