const express = require('express');
const mongoose = require('mongoose');

// Подключение к MongoDB
mongoose.connect('mongodb+srv://admin:11111@sport.wl4gqwj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
});

const User = mongoose.model('User', UserSchema);

const app = express();

app.use(express.json());

// Маршрут для сохранения данных пользователя
app.post('/users', async (req, res) => {
  try {
    const { name, phoneNumber } = req.body;
    const user = new User({ name, phoneNumber });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Что-то пошло не так' });
  }
});

// Маршрут для получения номера телефона
app.get('/api/phone-number', async (req, res) => {
  try {
    const user = await User.findOne();
    res.json({ phone_number: user.phoneNumber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Что-то пошло не так' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
