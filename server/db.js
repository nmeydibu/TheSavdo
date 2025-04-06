const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'dilshod',
  host: 'localhost',
  port: 5432,
  database: "postgres"
});

pool.query('SELECT * FROM customers', (err, res) => {
  if (err) {
    console.error('Xatolik:', err);
  } else {
    console.log('Natijalar:', res.rows);
  }
});

module.exports = pool;