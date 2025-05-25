import React from 'react'
import { Card, Container, Table } from 'react-bootstrap';
function HistoryPage() {
    const historyData = [
        { date: '2025-05-20', title: 'General Checkup', doctor: 'Dr. Smith' },
        { date: '2025-05-18', title: 'Eye Test', doctor: 'Dr. Emily' },
        { date: '2025-05-15', title: 'Heart Monitoring', doctor: 'Dr. Raj' },
    ];
    return (
        <Container fluid>
            <h2 className="mb-2 fw-bold text-primary">Appointment History</h2>
            <Card className="p-4 mt-4 bg-light">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Appointment Title</th>
                            <th>Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.title}</td>
                                <td>{item.doctor}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Container>
    )
}

export default HistoryPage
