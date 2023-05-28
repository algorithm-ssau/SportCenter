import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './StyleMe.css';

function Me() {
  useEffect(() => {
    const initMap = () => {
      // Создание объекта карты
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5074, lng: -0.1278 }, // Координаты центра карты
        zoom: 10, // Уровень масштабирования карты
      });

      // Создание маркера на карте
      const marker = new window.google.maps.Marker({
        position: { lat: 51.5074, lng: -0.1278 }, // Координаты маркера
        map: map,
        title: 'Спортивная студия', // Заголовок маркера
      });
    };

    // Загрузка API-скрипта карт Google
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Инициализация карты
    window.initMap = initMap;
  }, []);

  return (
    <div className="me-container">
      <h1>О нас</h1>
      <p>Добро пожаловать в нашу современную спортивную студию!</p>
      <p>Мы предлагаем широкий спектр тренировок и программ для достижения ваших фитнес-целей.</p>
      <div className="image-container">
        {/* Вставьте здесь фотографии или видео */}
      </div>
      <div className="button-container">
        <Button variant="primary" className="custom-button">
          Расписание тренировок
        </Button>
      </div>
      <div className="map-container">
        <div id="map" className="map"></div> {/* Добавлен контейнер для карты */}
      </div>
      <div className="additional-info">
        <h2>Контактная информация</h2>
        <p>Адрес: ул. Примерная, 123, г. Ваш Город</p>
        <p>Телефон: +7 123 456 789</p>
        <p>Email: info@studio.com</p>
      </div>
    </div>
  );
}

export default Me;
