import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './StyleMe.css';

function Me() {
 /* useEffect(() => {
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
*/
  return (
    <div className="me-container">
      <div className="studio-description">
      <h1 className="studio-description__title">Добро пожаловать в нашу спортивную студию!</h1>
      <p className="studio-description__text">Мы предлагаем уникальную комбинацию тренировок и программ для достижения ваших фитнес-целей. Наша студия оснащена современным оборудованием, а наши профессиональные инструкторы помогут вам развить физическую форму, повысить выносливость и улучшить общее самочувствие.</p>
      <p className="studio-description__text">Мы предлагаем широкий спектр тренировок, включая групповые занятия, персональные тренировки, йогу, пилатес, функциональный тренинг и многое другое. Независимо от вашего уровня физической подготовки или целей, у нас вы найдете подходящую программу для себя.</p>
      <p className="studio-description__text">Наши залы оформлены в современном стиле, создавая комфортную и мотивирующую атмосферу для тренировок. Мы стремимся предоставить нашим клиентам лучший опыт фитнеса и помочь им достичь своих целей в приятной и поддерживающей среде.</p>
      <p className="studio-description__text">Присоединяйтесь к нам уже сегодня и начните свой путь к здоровью, фитнесу и активной жизни!</p>
    </div>
    <div className="image-container">
        {/* Вставьте здесь фотографии или видео */}
      </div>


    </div>
  );
}

export default Me;
