const db = require('../db');

class CustomerController {
  async createCustomer(req, res) {
    const { name, phone, address } = req.body;
    const newPerson = await db.query(`INSERT INTO customers (name, phone, address) VALUES ($1, $2, $3) RETURNING *`, [name, phone, address]);
    res.json(newPerson.rows[0]);
  }

  async getCustomers(req, res) {
    const customers = await db.query(`SELECT * FROM customers`);
    res.json(customers.rows);
  }

  async getOneCustomer(req, res) {

  }

  async updateCustomer(req, res) {

  }

  async deleteCustomer(req, res) {

  }
}

module.exports = new CustomerController();