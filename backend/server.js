const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();
const multer = require('multer');

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Membuat storage engine untuk menyimpan file di folder 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.use(upload.single('foto_kegiatan'));

//panggil routes
var routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});

app.use('/uploads', express.static('uploads'));