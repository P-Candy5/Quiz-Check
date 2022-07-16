import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main>
      <div className="yellowImg">
        <img src="./yellowImg.svg" />
      </div>
      <section className="edges">
        <h2>Quizzical</h2>
        <p>Some description if needed</p>
        <Link to="/workspace">
          <button className="linkedButton">Start Quiz</button>
        </Link>
      </section>
      <div className="blueImg">
        <img src="./blueImg.svg" />
      </div>
    </main>
  );
};
