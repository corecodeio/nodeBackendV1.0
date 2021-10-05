const express = require('express');
const app = express();

const categoriesRoutes = require('./src/routes/categories');
const invalidRoutes = require('./src/routes/invalid');

app.use(express.json());

app.use(categoriesRoutes);
app.use(invalidRoutes);

app.listen(3800, () => {
  console.log('Server running in port 3800');
});