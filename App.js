import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';

const App = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/appointments')
            .then(response => setAppointments(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Appointment Booking System</h1>
            <DoctorList doctors={doctors} onSelectDoctor={setSelectedDoctor} />
            {selectedDoctor && <AppointmentForm doctor={selectedDoctor} setAppointments={setAppointments} />}
            <AppointmentsList appointments={appointments} />
        </div>
    );
};

export default App;
