import React from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";

function App() {
  return (
    <div className="App">
      <div id="event-list">
        <CitySearch />
        <EventList />
      </div>
    </div>
  );
}

export default App;
