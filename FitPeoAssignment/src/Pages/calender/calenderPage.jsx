import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, Container } from 'react-bootstrap';

function CalenderPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <Container fluid>
            <h2 className="mb-2 fw-bold text-primary">Calendar</h2>

            <Card className="p-4 mt-4">
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                />
                <p className="mt-3 fw-medium">Selected Date: {selectedDate.toDateString()}</p>
            </Card>
        </Container>
    )
}

export default CalenderPage
