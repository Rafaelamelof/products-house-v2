const express = require('express');
const AdminController = require('../controllers/AdminController');
const upload = require('../middlewares/upload')
const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/dashboard', AdminController.showDashboard);
router.get('/admin/produtos/cadastro', AdminController.showCadastroProdutos);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProdutos);

router.post("/admin/login", AdminController.login)

//const upload = multer({dest: 'src/public/images'})



router.post("/admin/produtos/cadastro", upload.single('image'), AdminController.storeProduto)

router.put('/admin/produtos/:id/editar', AdminController. updateProduto)
router.put('/admin/produtos/:id/deletar', AdminController. deleteProduto)

module.exports = router