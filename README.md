Meet 
An app designed to help people discover events in their city.

This app will use serverless functions to access public calendar events from the Google Calendar API. It will also be used for user authentication, notificaitons, and data processing. Servless functions are perfect for simplifying backend code and adjusting for scalability, and are a better alternative to creating and maintaining an entire server for this app. This app utilizes AWS Lambda.

USER SCENARIOS
--------------
Filter Events by City.

SCENARIO 1
When the user hasn’t searched for a specific city, show upcoming events from all cities.

Given the user hasn’t searched for any city, when the user opens the app, then the user should see a list of upcoming events.

SCENARIO 2
User should see a list of suggestions when they search for a city.

Given the main page is open, when the user starts typing in the city textbox, then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3
User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list, then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

--------

Show/Hide Event Details.

SCENARIO 1
Details for a specific event are hidden by default.

Given the user is viewing a list of multiple events, when the user doesn't take any action, then all the details for each event will be hidden by default.

SCENARIO 2
Details for an event are toggled on.

Given the user wants to learn more about a specific event from a list of events, when the user selects an event, then the user should see specific details for that event.

--------

Specify number of events.

SCENARIO 1
Details for a specific event are hidden by default.

Given the user has not selected a specific amount of events to view, when the user doesn't take any action, then the default selection will be 32 events.

SCENARIO 2
User sets a specific amount of events to view all at once.

Given the user has multiple events listed, when the user changes the number of events displayed on each page, then the number of events listed will update to the number the user selected.

-----

Use app when offline

SCENARIO 1
Show cached data when the user has no internet connection
Given the user has no internet connection, when the user goes uses the app, then they will see whatever data was last cached

SCENARIO 2
Show error when user changes the settings while offline
Given the user has no internet connection, when the user tries to change the settings, then they will be presented with an error message

------

Add an App Shortcut to the Home Screen

SCENARIO 1
User can install a shortcut for the app on their device’s home screen

Given the user has the app installed on their devices, when the user selects to add the app to their home screen, then a shortcut for the app will appear on their device’s home screen

------

Display Charts Visualizing Event Details

SCENARIO 1
Create and display a chart of events by city

Given the user is viewing an event’s details page, when the user hits a button to see a chart of events in all cities, then a chart with the number of events for every city is created and shown



https://docs.google.com/document/d/1brHNAIov365fsuosnDns_NyP5NDD6CYMqw-ec0pt0sQ/edit?usp=sharing)https://docs.google.com/document/d/1brHNAIov365fsuosnDns_NyP5NDD6CYMqw-ec0pt0sQ/edit?usp=sharing
