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

//menambahkan data Agenda
exports.addNewAgenda = function(req, res){
    var nama_kegiatan = req.body.nama_kegiatan;
    var deskripsi_kegiatan = req.body.deskripsi_kegiatan;
    var tempat_kegiatan = req.body.tempat_kegiatan;
    var jenis_kegiatan = req.body.jenis_kegiatan;
    var waktu = req.body.waktu;
    var tambahan = req.body.tambahan;
    var foto_kegiatan = req.body.foto_kegiatan;

    //Validasi apakah properti 'nama_kegiatan' , 'tempat_kegiatan' dan 'waktu' ada pada request body
    if (!nama_kegiatan || !tempat_kegiatan || !waktu) {
        const response = {
            status: 'fail',
            message: 'Gagal menambahkan agenda. Mohon isi nama, tempat, dan waktu kegiatan!',
        };
        res.status(400).json(response);
        return;
    }

    connection.query('INSERT INTO kegiatan_desa (nama_kegiatan,deskripsi_kegiatan,tempat_kegiatan,jenis_kegiatan,waktu,tambahan,foto_kegiatan) VALUES(?,?,?,?,?,?,?)', 
    [nama_kegiatan, deskripsi_kegiatan, tempat_kegiatan, jenis_kegiatan, waktu, tambahan, foto_kegiatan], function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            const successResponse = {
                status: 'success',
                message: 'Agenda berhasil ditambahkan',
            };
            res.status(201).json(successResponse);
        }
    });
};

