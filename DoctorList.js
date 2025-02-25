import React from 'react';

const DoctorList = ({ doctors, onSelectDoctor }) => {
    return (
        <div>
            <h2>Select a Doctor</h2>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor._id} onClick={() => onSelectDoctor(doctor)}>
                        {doctor.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
