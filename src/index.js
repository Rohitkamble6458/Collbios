import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import './styles.css'; // Note the change here


const App = () => {
  return <h1>Hello, Parcel with React!</h1>;
  <App/>
};

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
