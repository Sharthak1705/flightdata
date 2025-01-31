# React + TypeScript + Vite
Flight Status Application

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This is a Flight Status Application built with React, TypeScript, and React Router that fetches live flight data and displays the flight status. Users can view flight information, including departure time, status, and airline details. The application supports a real-time data fetch every 5 seconds to keep the flight information up-to-date.

`  Features : `
Displays a list of flights with their status (On Time, Delayed, Boarding, Departed).
Flight details page with more in-depth information about a specific flight.
Real-time updates with a 5-second refresh interval.
Navigation between different pages (Flight List, Flight Detail, and Sign-Up).


` Technologies Used : `
React - JavaScript library for building user interfaces.
TypeScript - Typed superset of JavaScript for better tooling and static analysis.
React Router - For navigation and routing between pages.
Tailwind CSS - Utility-first CSS framework for styling.
Fetch API - For making HTTP requests to fetch flight data.

` Prerequisites  : `
Before running the application, ensure you have the following installed:
Node.js (version 14 or higher)
npm or yarn (package managers)
Installation
Follow these steps to set up the application on your local machine:

```js

Clone the repository:
git clone https://github.com/Sharthak1705/flightdata
cd flightdata
```

```js

Install the dependencies:
npm install
```

```js

Run the application:
npm start
```

The app should now be running on http://localhost:5173.

Running Tests
If you have written tests (or plan to), you can run them using:

` npm test `

This will start Jest in watch mode. If you haven’t set up tests yet, you can integrate Jest or another testing framework of your choice.

` Usage : `

Flight List Page: Displays all flights along with their flight number, origin, destination, departure time, and status.
Flight Detail Page: By clicking on the "View Details" link, users can view additional details such as gate, terminal, and estimated arrival for a specific flight.
Sign-Up Page: A simple registration form to sign up for an account.

``
Flight Status Key:
On Time: The flight is scheduled to depart on time.
Delayed: The flight's departure is delayed.
Boarding: Passengers can board the flight.
Departed: The flight has already departed.
``

```js
File Structure
Here’s an overview of the project’s structure:

/src
  /assets
    flight.png           # Flight logo image
  /components
    /flight
      Flight.tsx         # Main flight list component
      FlightDetails.tsx  # Flight details component
    /navbar
      Navbar.tsx         # Navbar component with the flight logo and Sign-In button
    /registerpage
      Form.tsx           # Sign-up form component
  App.tsx                # Main entry point for React App
  index.tsx              # Application entry point

```

` Component Breakdown `

Navbar: Displays the logo, a heading ("Flight Status"), and a Sign-In button.

Flight: Fetches and displays a list of flights with their status.

FlightDetail: Displays detailed information for a specific flight, including gate, terminal, and estimated arrival time.

Form: A basic form for user sign-up.

` Error Handling `

The application uses basic error handling to display error messages if there are issues fetching flight data or if a flight is not found.
Notes
This app fetches data from a mock API. In a real-world application, replace the fetch URLs with actual endpoints.

The app uses setInterval to fetch updated data every 5 seconds.

` Contributing `
If you would like to contribute to this project, feel free to fork it, create a new branch, and submit a pull request. Please make sure to follow the existing code style and add necessary comments for better understanding.

Steps for contributing:
```js

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m "Add feature").

Push to the branch (git push origin feature-branch).

Create a pull request.
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
