import React from 'react';

const AppointmentsList = ({ appointments }) => {
    return (
        <div>
            <h2>Upcoming Appointments</h2>
            <ul>
                {appointments.map(app => (
                    <li key={app._id}>
                        {app.patientName} - {new Date(app.date).toLocaleString()} ({app.appointmentType})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentsList;
