import "../styles.css";
import AppointmentForm from "../components/AppointmentForm";
import Appointments from "../components/Appointments";
import { useState } from "react";

export default function App() {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  function addAppt(appt) {
    const newAppts = [...appointments, appt];
    localStorage.setItem("appointments", JSON.stringify(newAppts));
    setAppointments(JSON.parse(localStorage.getItem("appointments")));
  }

  function deleteAppt(idx) {
    const newAppts = appointments;
    newAppts.splice(idx, 1);
    localStorage.setItem("appointments", JSON.stringify(newAppts));
    setAppointments(JSON.parse(localStorage.getItem("appointments")));
  }

  return (
    <div className="App">
      <Appointments appointments={appointments} deleteAppt={deleteAppt} />
      <AppointmentForm addAppt={addAppt} />
    </div>
  );
}
