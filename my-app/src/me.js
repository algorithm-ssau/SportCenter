import React from 'react';
import { Button } from 'react-bootstrap';
import './StyleMe.css';
import photo1 from './photos/photo1.jpg';
import photo2 from './photos/photo2.jpg';
import photo3 from './photos/photo3.jpg';
function Me() {
return (
<div className="me-container">
<div className="studio-description">
<h1 className="studio-description__title">Добро пожаловать в нашу спортивную студию!</h1>
<div className="image-container">
<div className="image-wrapper">
<img src={photo1} alt="Image 1" className="image" />
</div>
<div className="image-wrapper">
<img src={photo2} alt="Image 2" className="image" />
</div>
<div className="image-wrapper">
<img src={photo3} alt="Image 3" className="image" />
</div>
</div>
<p className="studio-description__text">Мы предлагаем уникальную комбинацию тренировок и программ для достижения ваших фитнес-целей. Наша студия оснащена современным оборудованием, а наши профессиональные инструкторы помогут вам развить физическую форму, повысить выносливость и улучшить общее самочувствие.</p>
<p className="studio-description__text">Мы предлагаем широкий спектр тренировок, включая групповые занятия, персональные тренировки, йогу, пилатес, функциональный тренинг и многое другое. Независимо от вашего уровня физической подготовки или целей, у нас вы найдете подходящую программу для себя.</p>
<p className="studio-description__text">Наши залы оформлены в современном стиле, создавая комфортную и мотивирующую атмосферу для тренировок. Мы стремимся предоставить нашим клиентам лучший опыт фитнеса и помочь им достичь своих целей в приятной и поддерживающей среде.</p>
<p className="studio-description__text1">Присоединяйтесь к нам уже сегодня и начните свой путь к здоровью, фитнесу и активной жизни!</p>
</div>

</div>
);
}

export default Me;