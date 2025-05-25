import React from 'react';
import './healthStatusCards.css';
import lungsIcon from '../../../../public/lungs.avif';
import teethIcon from '../../../../public/teeth.avif';
import boneIcon from '../../../../public/bone.avif';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const cardData = [
  { title: 'Lungs', status: 'Needs Attention', date: '2025-05-20', color: '#F44336', progress: 40, icon: lungsIcon },
  { title: 'Teeth', status: 'Good', date: '2025-05-18', color: '#4CAF50', progress: 85, icon: teethIcon },
  { title: 'Bone', status: 'Weak', date: '2025-05-19', color: '#FF9800', progress: 60, icon: boneIcon },
];

function HealthStatusCards() {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="health-card" key={index}>
          <div className="card-title-with-icon">
            <img src={card.icon} alt={`${card.title} icon`} className="card-icon" />
            <h3>{card.title}</h3>
          </div>
          <p>Status: <strong>{card.status}</strong></p>
          <p>Last Checked: {card.date}</p>
          <ProgressBar
            now={card.progress}
            label={`${card.progress}%`}
            variant="custom"
            style={{
              height: '10px',
              backgroundColor: '#e9ecef',
              marginTop: '10px',
            }}
            animated
          />
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
