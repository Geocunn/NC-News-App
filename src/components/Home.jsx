import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p className="aboutInfo">
          NC News is a full stack project created using various resources. On
          the backend PSQL has been used to create the database, which has been
          hosted using Heroku. React has been used to create the front end, and
          more specifically the react-bootstrap package. Below are links to the
          respective resources used in the creation of this application.
        </p>
        <a
          className="link1"
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noreferrer"
        >
          PostgresSQL
        </a>
        <a
          className="link2"
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
        <a
          className="link3"
          href="https://heroku.com"
          target="_blank"
          rel="noreferrer"
        >
          Heroku
        </a>
        <p className="aboutFooter">
          This project was created be George Cunnningham. For more info, please
          visit my website at{" "}
          <a href="https://geocunn.co.uk" target="_blank" rel="noreferrer">
            geocunn.co.uk
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
