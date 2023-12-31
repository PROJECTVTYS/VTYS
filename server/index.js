const express = require('express');
const placeRoutes = require('./routes/placeRoutes');
require('dotenv').config();
const cors=require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/places', placeRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
