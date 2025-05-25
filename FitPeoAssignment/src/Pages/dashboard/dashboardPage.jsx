import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnatomySection from '../../Components/dashboard-component/anatomySection/anatomySection';
import HealthStatusCards from '../../Components/dashboard-component/healthStatus/healthStatusCards';
import ActivityFeed from '../../Components/dashboard-component/activityFeed/activityFeed';
import CalendarView from '../../Components/dashboard-component/calendar/calenderView';
function Dashboard() {
  return (
    <Container fluid>
      <h2 className="mb-2 fw-bold text-primary">Dashboard</h2>
      <Row>
        <Col lg={7}>
          <Row className="mb-4">
            <Col md={6}>
              <Card className="shadow-sm bg-light rounded-4 mb-4 mt-2">
                <Card.Body>
                  <Card.Title className="mb-3">Anatomy Overview</Card.Title>
                  <AnatomySection />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm bg-light rounded-4 mb-4 mt-2">
                <Card.Body>
                  <Card.Title className="mb-3">Health Status</Card.Title>
                  <HealthStatusCards />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="shadow-sm bg-light rounded-4 mb-4 mt-2">
            <Card.Body>
              <Card.Title className="mb-3">Activities</Card.Title>
              <ActivityFeed />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="shadow-sm bg-light rounded-4 mb-4 mt-2 p-2">
            <Card.Body>
              <Card.Title className="mb-3">Calendar</Card.Title>
              <CalendarView />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
