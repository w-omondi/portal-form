const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uniquePrefix = Date.now() + Math.round(Math.random() * 1E9)



const fileUpload = (req, res) => {
    let createdFolder = '';
    const setCreatedFolder = name => createdFolder = name;

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log(uniquePrefix);
            const folderName = `./uploads/${uniquePrefix + '-' + req.body.applicant.toLocaleUpperCase()}`
            try {
                if (!fs.existsSync(folderName)) {
                    fs.mkdirSync(folderName)
                }
            } catch (error) {
                throw error;
            }
            cb(null, folderName);
            setCreatedFolder(folderName);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname.toLocaleUpperCase());
        }
    })

    const upload = multer({ storage: storage }).array('file');

    upload(req, res, function (err) {
        console.log(req.body.applicant);
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(500).json(err);
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(500).json(err);
        }
        // Everything went fine.
        return res.status(200).send(createdFolder);
    })
}

module.exports = { fileUpload }