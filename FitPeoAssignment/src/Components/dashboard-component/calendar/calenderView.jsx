import React from 'react';
import './calenderView.css';
import { Card, Col, Row } from 'react-bootstrap';
import { FaStethoscope, FaEye, FaHeart, FaBrain } from "react-icons/fa";
function CalendarView() {
  return (
    <div className="calendar-view">
      <h5>October 2021</h5>
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="day-header">{day}</div>
        ))}
        {[...Array(31)].map((_, i) => (
          <div key={i} className={`day-cell ${[25, 26, 27, 28, 29].includes(i + 1) ? 'active-day' : ''}`}>
            {i + 1}
          </div>
        ))}
      </div>
      <Row className="mt-1 gx-4">
        <Col>
          <div className="appointment-card blue-card">
            <div className="appointment-title">Dentist</div>
            <div className="appointment-time">09:00 - 11:00</div>
            <div className="appointment-doctor">Dr. Cameron Willamson</div>
          </div>
        </Col>
        <Col>
          <div className="appointment-card">
            <div className="appointment-title">Physiotherapy Appointment</div>
            <div className="appointment-time">11:00 - 12:00</div>
            <div className="appointment-doctor">Dr. Kevin Djones</div>
          </div>
        </Col>
      </Row>
      <Card className="upcoming-schedule-card mt-2 p-4">
        <Card.Title className="mb-4 fs-5 fw-semibold">The Upcoming Schedule</Card.Title>
        <div className="mb-2">
          <h6 className="fw-bold">On Thursday</h6>
          <Row>
            <Col>
              <Card className="custom-appointment-card p-3 mb-3 d-flex flex-row align-items-center gap-2">
                <FaStethoscope size={20} className="text-primary" />
                <div>
                  <div className="fw-medium text-dark">Health checkup complete</div>
                  <div className="text-muted small">11:00 AM</div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="custom-appointment-card p-3 mb-3 d-flex flex-row align-items-center gap-2">
                <FaEye size={20} className="text-danger" />
                <div>
                  <div className="fw-medium text-dark">Ophthalmologist</div>
                  <div className="text-muted small">14:00 PM</div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Saturday */}
        <div>
          <h6 className="fw-bold">On Saturday</h6>
          <Row>
            <Col>
              <Card className="custom-appointment-card p-3 mb-3 d-flex flex-row align-items-center gap-2">
                <FaHeart size={20} className="text-danger" />
                <div>
                  <div className="fw-medium text-dark">Cardiologist</div>
                  <div className="text-muted small">12:00 AM</div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="custom-appointment-card p-3 mb-3 d-flex flex-row align-items-center gap-2">
                <FaBrain size={20} className="text-warning" />
                <div>
                  <div className="fw-medium text-dark">Neurologist</div>
                  <div className="text-muted small">16:00 PM</div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default CalendarView;
