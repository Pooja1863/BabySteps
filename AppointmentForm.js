import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = ({ doctor, setAppointments }) => {
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(30);
    const [patientName, setPatientName] = useState('');
    const [appointmentType, setAppointmentType] = useState('Routine Check-Up');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/appointments', {
                doctorId: doctor._id,
                date,
                duration,
                appointmentType,
                patientName
            });
            setAppointments(prev => [...prev, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book an Appointment with Dr. {doctor.name}</h2>
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
                <option value={30}>30 minutes</option>
                <option value={60}>60 minutes</option>
            </select>
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Patient Name" required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;
