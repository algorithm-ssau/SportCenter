import React from 'react';
import './styles.css';

const trainersData = [
    { name: 'Trainer One', speciality: 'Cardio' },
    { name: 'Trainer Two', speciality: 'Weightlifting' },
    { name: 'Trainer Three', speciality: 'Yoga' },
    { name: 'Trainer Four', speciality: 'Pilates' },
    { name: 'Trainer Five', speciality: 'Boxing' },
    { name: 'Trainer Six', speciality: 'Crossfit' },
    { name: 'Trainer Seven', speciality: 'Functional Training' },
    { name: 'Trainer Eight', speciality: 'Bodybuilding' },
    { name: 'Trainer Nine', speciality: 'Calisthenics' },
];

const TrainerCard = ({ name, speciality }) => {
    return (
        <div className="trainer-card">
            <h3>{name}</h3>
            <p>{speciality}</p>
        </div>
    );
};

const Trainers = () => {
    return (
        <div className="trainers-container">
            <h2>Our Trainers</h2>
            <div className="trainers-grid">
                {trainersData.map((trainer, index) => (
                    <TrainerCard key={index} name={trainer.name} speciality={trainer.speciality} />
                ))}
            </div>
        </div>
    );
};

export default Trainers;