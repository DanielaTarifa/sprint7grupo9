const express= require('express');
const router= express.Router();

let productController=require('../controllers/productController');
const multer=require('multer')
const path = require('path');
const { body } = require('express-validator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

//middleware
const validacionesCreate = require('../middlewares/creacionProdtValidacionMiddle.js');
const validacionesEditPrduct = require('../middlewares/editarProductValidacionMiddle.js');


//home
router.get('/', productController.all);
router.get('/ayuda',productController.ayuda);

//detalle
router.get('/productDetail/:id', productController.detail);
router.get('/productCart',productController.cart);
router.get('/resumen',productController.resumen);

//search
router.get('/search', productController.search);

//CRUD- 
//crear
router.get('/agregarProducto', productController.add);//add-crear
router.post('/agregarProducto',upload.single("imagen"), validacionesCreate, productController.create);//create-guardado
//leer
router.get('/allproducts',productController.listAdmi);//listado admi-alls
router.get('/todos',productController.listClient);//listado admi-alls
//modificar
router.get('/editarProducto/:id', productController.edit);//editar
router.put('/editarProducto/:id',upload.single("imagen"), validacionesEditPrduct, productController.update);//actualizar
//eliminar
router.delete('/borrar/:id',productController.delete);

module.exports= router;