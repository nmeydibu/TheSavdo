const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const app = express();
const customerRoutes = require('./routes/customer.routes');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Faqat shu domenga ruxsat berish
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Ruxsat berilgan metodlar
  credentials: true, // Cookie va autentifikatsiya ma'lumotlarini yuborishga ruxsat
}));
app.use('/api', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});