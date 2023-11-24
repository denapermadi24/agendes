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

//menampilkan agenda berdasarkan id
exports.getAgendabById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM kegiatan_desa WHERE id_kegiatan = ?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            if (rows.length === 0) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'Agenda tidak ditemukan',
                });
            }
            response.ok(rows,res);
        }
    });
};