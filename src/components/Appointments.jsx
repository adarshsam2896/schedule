import AppointmentCard from "./AppointmentCard";

export default function Appointments({ appointments, deleteAppt }) {
  return (
    <div>
      <h1>Appointment Tracker</h1>
      <div className="CardContainer">
        {!appointments.length ? (
          <h4 className="no-appt">You have no appointments yet</h4>
        ) : (
          appointments.map((appt, idx) => (
            <AppointmentCard
              title={appt.title}
              date={appt.date}
              duration={appt.duration}
              deleteAppt={deleteAppt}
              loct={appt.loct}
              key={idx}
              idx={idx}
            />
          ))
        )}
      </div>
    </div>
  );
}
