import { useState } from "react";

export default function AppointmentCard({
  title,
  date,
  duration,
  idx,
  loct,
  deleteAppt
}) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  function fadeOut() {
    setIsFadingOut(true);
  }

  date = date.replace("T", " ");
  let newDate = date.slice(0, 10);
  let time = date.slice(10, 16);

  function handleDelete() {
    deleteAppt(idx);
    setIsFadingOut(false);
  }
  return (
    <div
      className={
        isFadingOut ? "item-fadeout AppointmentCard" : "AppointmentCard"
      }
    >
      <h3 className="left-align">🟢 {title}</h3>
      <p className="left-align">{duration} min</p>
      <ul>
        <li>Date: {newDate}</li>
        <li>Time: {time}</li>
        <li>Duration: {duration} min</li>
        <li>Location: {loct} </li>
      </ul>
      <button
        className="delete-btn"
        onClick={() => fadeOut(setTimeout(() => handleDelete(), 1000))}
      >
        Delete
      </button>
    </div>
  );
}
