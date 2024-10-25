// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Exportar o servidor para os testes
