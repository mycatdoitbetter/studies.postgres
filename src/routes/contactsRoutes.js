const router = require("express-promise-router")();
const contactsController = require("../controllers/contactsController");

router.post("/contacts", contactsController.create);
router.get("/contacts", contactsController.read);
router.put("/contacts/:id", contactsController.update);
router.delete("/contacts/:id", contactsController.delete);

module.exports = router;
