const express = require('express');
const AdminController = require('../controllers/AdminController');
const multer = require ('multer')


const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/dashboard', AdminController.showDashboard);
router.get('/admin/produtos/cadastro', AdminController.showCadastroProdutos);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProdutos);

router.post("/admin/login", AdminController.login)

//const upload = multer({dest: 'src/public/images'})

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

router.post("/admin/produtos/cadastro", upload.single('image'), AdminController.storeProduto)

router.put('/admin/produtos/:id/editar', AdminController. updateProduto)
router.put('/admin/produtos/:id/deletar', AdminController. deleteProduto)

module.exports = router