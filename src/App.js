import React from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";

function App() {
  return (
    <div className="App">
      <div id="event-list">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    </div>
  );
}

export default App;
