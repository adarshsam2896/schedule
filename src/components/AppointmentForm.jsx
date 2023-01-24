import { useState } from "react";

const initState = {
  title: "",
  date: "",
  loct:"",
  duration: ""
};

export default function AppointmentForm({ addAppt }) {
  const [newAppt, setNewAppt] = useState(initState);

  function handleChange(evt) {
    const newApptData = { ...newAppt, [evt.target.name]: evt.target.value };
    setNewAppt(newApptData);
  }

  function handleAddAppt(evt) {
    evt.preventDefault();
    addAppt(newAppt);
    console.log(newAppt);
    setNewAppt(initState);
  }

  return (
    <div className="AppointmentForm">
      <h2>Add A New Appointment</h2>
      <form action="" onSubmit={handleAddAppt}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title of Appointment"
          value={newAppt.title}
          name="title"
          required
        />
        <input
          onChange={handleChange}
          type="datetime-local"
          value={newAppt.date}
          name="date"
          required
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Duration(minutes)"
          value={newAppt.duration}
          name="duration"
          min="1"
          required
        />
        <select value={newAppt.loct} name="loct" required onChange={handleChange}>
          <option value="">--select a city--</option>
          <option value="San Diego">San Diego</option>
          <option value="Portland">Portland</option>
          <option value="Seattle">Seattle</option>
          <option value="London">London</option>
          <option value="Orlando">Orlando</option>
        </select>
        <hr />
        <button className="add-btn" type="submit">
          Add Appointment
        </button>
      </form>
    </div>
  );
}
