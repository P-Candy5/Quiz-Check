import React from "react";
import { useState } from "react";

export const WorkSpace = () => {
  const [answer, setAnswer] = useState(0);
  const [stores, setStores] = useState(0);
  const [planet, setPlanet] = useState(0);
  const [invent, setInvent] = useState(0);
  const [hearts, setHearts] = useState(0);

  const isCorrect = answer === 1;
  console.log(isCorrect);
  return (
    <main>
      <div className="yellowImg">
        <img src="./yellowImg.svg" />
      </div>
      <section className="questionHolder">
        <div className="borderBottom">
          <div>
            <p className="header">How would one say goodbye in Spanish?</p>
          </div>
          <div className="purpleButts">
            <button
              onClick={() => {
                setAnswer(1);
              }}
              className={answer == 1 ? "purple" : "borderButton"}
            >
              Adiós
            </button>
            <button
              onClick={() => {
                setAnswer(2);
              }}
              className={answer == 2 ? "purple" : "borderButton"}
            >
              Hola
            </button>
            <button
              onClick={() => {
                setAnswer(3);
              }}
              className={answer == 3 ? "purple" : "borderButton"}
            >
              Au Revoir
            </button>
            <button
              onClick={() => {
                setAnswer(4);
              }}
              className={answer == 4 ? "purple" : "borderButton"}
            >
              Salir
            </button>
          </div>
        </div>

        <div className="borderBottom">
          <div>
            <p className="header">
              Which best selling toy of 1983 caused hysteria, resulting in riots
              breaking in stores?
            </p>
          </div>
          <div className="purpleButts">
            <button
              onClick={() => {
                setStores(1);
              }}
              className={stores == 1 ? "purple" : "borderButton"}
            >
              Cabbage Patch Kids
            </button>
            <button
              onClick={() => {
                setStores(2);
              }}
              className={stores == 2 ? "purple" : "borderButton"}
            >
              Transformers
            </button>
            <button
              onClick={() => {
                setStores(3);
              }}
              className={stores == 3 ? "purple" : "borderButton"}
            >
              Care Bears
            </button>
            <button
              onClick={() => {
                setStores(4);
              }}
              className={stores == 4 ? "purple" : "borderButton"}
            >
              Rubik’s Cube
            </button>
          </div>
        </div>

        <div className="borderBottom">
          <div>
            <p className="header">
              What is the hottest planet in our Solar System?
            </p>
          </div>
          <div className="purpleButts">
            <button
              onClick={() => {
                setPlanet(1);
              }}
              className={planet == 1 ? "purple" : "borderButton"}
            >
              Mercury
            </button>
            <button
              onClick={() => {
                setPlanet(2);
              }}
              className={planet == 2 ? "purple" : "borderButton"}
            >
              Venus
            </button>
            <button
              onClick={() => {
                setPlanet(3);
              }}
              className={planet == 3 ? "purple" : "borderButton"}
            >
              Mars
            </button>
            <button
              onClick={() => {
                setPlanet(4);
              }}
              className={planet == 4 ? "purple" : "borderButton"}
            >
              Saturn
            </button>
          </div>
        </div>

        <div className="borderBottom">
          <div>
            <p className="header">
              In which country was the caesar salad invented?
            </p>
          </div>
          <div className="purpleButts">
            <button
              onClick={() => {
                setInvent(1);
              }}
              className={invent == 1 ? "purple" : "borderButton"}
            >
              Italy
            </button>
            <button
              onClick={() => {
                setInvent(2);
              }}
              className={invent == 2 ? "purple" : "borderButton"}
            >
              Portugal
            </button>
            <button
              onClick={() => {
                setInvent(3);
              }}
              className={invent == 3 ? "purple" : "borderButton"}
            >
              Mexico
            </button>
            <button
              onClick={() => {
                setInvent(4);
              }}
              className={invent == 4 ? "purple" : "borderButton"}
            >
              France
            </button>
          </div>
        </div>

        <div className="borderBottom">
          <div>
            <p className="header">How Many Hearts Does An Octopus Have?</p>
          </div>
          <div className="purpleButts">
            <button
              onClick={() => {
                setHearts(1);
              }}
              className={hearts == 1 ? "purple" : "borderButton"}
            >
              One
            </button>
            <button
              onClick={() => {
                setHearts(2);
              }}
              className={hearts == 2 ? "purple" : "borderButton"}
            >
              Two
            </button>
            <button
              onClick={() => {
                setHearts(3);
              }}
              className={hearts == 3 ? "purple" : "borderButton"}
            >
              Three
            </button>
            <button
              onClick={() => {
                setHearts(4);
              }}
              className={hearts == 4 ? "purple" : "borderButton"}
            >
              Four
            </button>
          </div>
        </div>
      </section>

      <section className="result">
        <button>Check answers</button>
      </section>
      <div className="blueImg">
        <img src="./blueImg.svg" />
      </div>
    </main>
  );
};
