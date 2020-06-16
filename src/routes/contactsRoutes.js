const router = require("express-promise-router")();
const productController = require("../controllers/contactsController");

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post("/products", productController.create);

module.exports = router;
