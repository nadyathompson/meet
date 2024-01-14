import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="Event">
      <h2>{event.summary}</h2>
      <h3>{event.created}</h3>
      <p>{event.location}</p>
      <button
        className="showDetails"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "hide details" : "show details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Details</h3>
          <p>{event.details}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
