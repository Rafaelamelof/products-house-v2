const multer = require ('multer')
const path = require ('path')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
       callback(null, 'src/public/images') 
    },
    filename: function(req,file,callback){
        let fileName = `${Date.now()}_products_${file.originalname}`
        callback (null, fileName) // perguntar sobre essa estrutura, entender aonde o callback vai ser chamado
    }
})

const upload = multer ({storage}) // perguntar

module.exports = upload