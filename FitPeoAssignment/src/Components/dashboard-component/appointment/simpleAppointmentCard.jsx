import React from 'react';
import './SimpleAppointmentCard.css';
import { Card } from 'react-bootstrap';
import { FaHeart, FaUserMd, FaEye } from 'react-icons/fa';

const iconMap = {
  heart: <FaHeart color="red" />,
  doctor: <FaUserMd color="#007bff" />,
  eye: <FaEye color="#6f42c1" />,
};

function SimpleAppointmentCard({ title, time, iconType }) {
  return (
    <Card className="simple-appointment-card">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <Card.Title className="mb-1">{title}</Card.Title>
          <Card.Text className="text-muted mb-0">{time}</Card.Text>
        </div>
        <div className="icon-container">
          {iconMap[iconType]}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SimpleAppointmentCard;
