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

//mengubah data agenda berdasarkan id
exports.updateAgendaById = function(req, res){
    var id = req.params.id;
    var nama_kegiatan = req.body.nama_kegiatan;
    var deskripsi_kegiatan = req.body.deskripsi_kegiatan;
    var tempat_kegiatan = req.body.tempat_kegiatan;
    var jenis_kegiatan = req.body.jenis_kegiatan;
    var waktu = req.body.waktu;
    var tambahan = req.body.tambahan;
    var foto_kegiatan = req.body.foto_kegiatan;

    //Validasi apakah properti 'nama_kegiatan' , 'tempat_kegiatan' dan 'waktu' ada pada request body 
    if (!nama_kegiatan || !tempat_kegiatan || !waktu) {
        const failResponse = {
            status: 'fail',
            message: 'Gagal memperbarui agenda. Mohon isi nama, tempat, dan waktu kegiatan!',
        };
        return res.status(400).json(failResponse);
    }

    connection.query('UPDATE kegiatan_desa SET nama_kegiatan=?, deskripsi_kegiatan=?, tempat_kegiatan=?, jenis_kegiatan=?, waktu=?, tambahan=?, foto_kegiatan=? WHERE id_kegiatan=?', 
    [nama_kegiatan, deskripsi_kegiatan, tempat_kegiatan, jenis_kegiatan, waktu, tambahan, foto_kegiatan, id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            if (rows.affectedRows === 0) {
                const notFoundResponse = {
                    status: 'fail',
                    message: 'Gagal memperbarui agenda. Id tidak ditemukan',
                };
                return res.status(404).json(notFoundResponse);
            }
            const successResponse = {
                status: 'success',
                message: 'Agenda berhasil diubah',
            };
            return res.status(200).json(successResponse);
        }
    });
};

//menghapus agenda berdasarkan id
exports.deleteAgendaById = function(req, res){
    var id = req.params.id;
    connection.query('DELETE FROM kegiatan_desa WHERE id_kegiatan=?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            if (rows.affectedRows === 0) {
                const notFoundResponse = {
                    status: 'fail',
                    message: 'Gagal menghapus agenda. Id tidak ditemukan',
                };
                return res.status(404).json(notFoundResponse);
            }
            const successResponse = {
                status: 'success',
                message: 'Agenda berhasil dihapus',
            };
            return res.status(200).json(successResponse);
        }
    });
};

//menambahkan data reminder warga desa
exports.addNewReminder = function(req, res){
    var nama_user = req.body.nama_user;
    var email_user = req.body.email_user;

    //Validasi apakah properti 'nama' dan 'email' ada pada request body
    if (!nama_user || !email_user) {
        const response = {
            status: 'fail',
            message: 'Gagal mengaktifkan reminder. Mohon isi nama dan email Anda!',
        };
        res.status(400).json(response);
        return;
    }

    connection.query('INSERT INTO reminder_warga_desa (nama_user,email_user) VALUES(?,?)', 
    [nama_user, email_user], function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            const successResponse = {
                status: 'success',
                message: 'Terima Kasih! Data anda telah kami terima. Kegiatan ini telah ditambahkan ke daftar agenda Anda. Harap cek email Anda untuk melihat detail undangan kegiatan ini.',
            };
            res.status(201).json(successResponse);
        }
    });
};

//menampilkan semua reminder
exports.showAllReminder = function(req, res){
    connection.query('SELECT * FROM reminder_warga_desa', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};
