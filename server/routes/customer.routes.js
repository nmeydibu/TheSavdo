const Router = require('express').Router;
const router = new Router();
const customerController = require('../controllers/customer.controller');

router.post('/customers', customerController.createCustomer);
router.get('/customer_list', customerController.getCustomers);
router.get('/customers/:id', customerController.getOneCustomer);
router.put('/customers', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;