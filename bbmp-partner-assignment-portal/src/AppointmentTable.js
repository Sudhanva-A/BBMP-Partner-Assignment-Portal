// src/components/AppointmentTable.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>City</th>
          <th>ZIP Code</th>
          <th>Partner Name</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment.id}>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.city}</td>
            <td>{appointment.zipcode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
