import React from "react";
import "./App.css";
import { IoChevronDown } from "react-icons/io5";
import Switch from "./switch";

function App() {
  let [darkMode, setDarkMode] = React.useState(false);
  function handleSwitch() {
    setDarkMode((prvMode) => !prvMode);
  }
  const myStyle = {
    backgroundColor: darkMode && "#000",
    color: darkMode && "#ffff",
  };

  const headerStyle = {
    color: darkMode && "#ffff",
  };

  const btnStyle = {
    color: darkMode && "#ffff",
    backgroundColor: darkMode && "#626262",
    border: darkMode && "none",
  };

  return (
    <div style={myStyle} className="App">
      <header style={headerStyle} className="App-header">
        <h2 style={headerStyle}>stretch.</h2>
        <div className="ul-box">
          <ul>
            <li>
              Platform <IoChevronDown />
            </li>
            <li>
              Use case <IoChevronDown />
            </li>
            <li>
              Why stretch <IoChevronDown />
            </li>
            <li>
              Resources <IoChevronDown />
            </li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="login-box">
          <p>{darkMode ? "Dark" : "Light"}</p>
          <Switch handleSwitch={handleSwitch} />
        </div>
      </header>

      <section>
        <div style={myStyle} className="text-container">
          <div>
            <h1 style={headerStyle}>
              Everything you
              <br /> need to scale <br />a global team
            </h1>
            <p style={headerStyle}>
              Grow bigger with stretch. Hire faster by adopting
              <br /> the best HR processes,simplifying payroll, and stay
              <br />
              compliant, no matter where your team is located.
            </p>

            <div className="input-div">
              <input type="Email" placeholder="Type your awesome Email" />
              <button style={btnStyle}>Request a demo</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>
            More than 14000 businesses use <br />
            stretch(and counting)
          </p>
        </div>
        <img src="/images/Revolt.svg" alt="" />
        <img src="/images/Intercom.svg" alt="" />
        <img src="/images/RedBull.svg" alt="" />
        <div className="drop-box">
          <img src="/images/dropBoxLogo.svg" alt="" />
          <img src="/images/dropboxTest.svg" alt="" />
        </div>
        <img src="/images/subwayLogo.png" alt="" />
      </footer>
    </div>
  );
}

export default App;
