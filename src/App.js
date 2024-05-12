// // import React from "react";
// // import { useEffect, useState } from "react";
// // import "./App.css";
// // import CitySearch from "./components/CitySearch";
// // import EventList from "./components/EventList";
// // import NumberOfEvents from "./components/NumberOfEvents";
// // import { getEvents, extractLocations } from "./api";

// // function App() {
// //   const [events, setEvents] = useState([]);
// //   const [currentNOE, setCurrentNOE] = useState(32);
// //   const [allLocations, setAllLocations] = useState([]);
// //   const [currentCity, setCurrentCity] = useState("See all cities");

// //   const fetchData = async () => {
// //     const allEvents = await getEvents();
// //     const filteredEvents =
// //       currentCity === "See all cities"
// //         ? allEvents
// //         : allEvents.filter((event) => event.location === currentCity);
// //     setEvents(filteredEvents.slice(0, currentNOE));
// //     setAllLocations(extractLocations(allEvents));
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, [currentCity, currentNOE]);

// //   return (
// //     <div className="App">
// //       <div id="event-list">
// //         <CitySearch
// //           allLocations={allLocations}
// //           setCurrentCity={setCurrentCity}
// //         />
// //         <EventList events={events} />
// //         <NumberOfEvents setCurrentNOE={setCurrentNOE} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import CitySearch from "./components/CitySearch";
// import EventList from "./components/EventList";
// import NumberOfEvents from "./components/NumberOfEvents";
// import "./App.css";
// import { useEffect, useState } from "react";
// import { getEvents, extractLocations } from "./api";

// const App = () => {
//   const [events, setEvents] = useState([]);
//   const [currentNOE, setCurrentNOE] = useState(32);
//   const [allLocations, setAllLocations] = useState([]);
//   const [currentCity, setCurrentCity] = useState("See all Cities");

//   useEffect(() => {
//     fetchData();
//   }, [currentCity, currentNOE]);

//   const fetchData = async () => {
//     const allEvents = await getEvents();

//     const filteredEvents =
//       currentCity === "See all Cities"
//         ? allEvents
//         : allEvents.filter((event) => event.location === currentCity);

//     setEvents(filteredEvents.slice(0, currentNOE));
//     setAllLocations(extractLocations(allEvents));
//   };

//   return (
//     <div className="App">
//       <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
//       <NumberOfEvents setCurrentNOE={setCurrentNOE} />
//       <EventList events={events} />
//     </div>
//   );
// };

// export default App;

import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";
import { useEffect, useState } from "react";
import { getEvents, extractLocations } from "./api";
const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all Cities");

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  const fetchData = async () => {
    //   if (allEvents === undefined)
    //   return [];
    // else return allEvents;
    const allEvents = await getEvents();
    // if (!Array.isArray(allEvents)) {
    //   return [];
    // }
    //const valueToSlice = allEvents || [];
    //console.log("getEvents: " + (await getEvents()));
    //const allEvents = [];
    const filteredEvents =
      currentCity === "See all Cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);

    //const valueToSlice = allEvents || [];
    //const valueToSlice = filteredEvents || [];
    console.log("filteredEvents: " + filteredEvents);
    console.log("allEvents: " + allEvents);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};
export default App;
