import React from 'react'
import SimpleAppointmentCard from './simpleAppointmentCard'

function UpcomingSchedule() {
  return (
        <div className="upcoming-schedule">
      <h6>On Thursday</h6>
      <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" />
      <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" />
      <h6>On Saturday</h6>
      <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" />
      <SimpleAppointmentCard title="Neurologist" time="16:00 PM" />
    </div>
  )
}

export default UpcomingSchedule
