import React, { useState } from "react";
import chess from "./assets/chess.svg";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [drop, setDrop] = useState(false);
  const dropper = () => {
    if (drop) {
      setDrop(false);
    }
  };
  return (
    <div onClick={dropper}>
      <Header />
      <div className="filters-section">
        <button
          onClick={() => setDrop(!drop)}
          className="filters mx-8 p-2 bg-[#15192A]"
        >
          <span>Filters</span>{" "}
          <span>
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.5 6L10 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>{" "}
        </button>
      </div>
      <div className="all-section flex p-6 px-20 gap-4 ">
        <div className={`checkbox-section ${drop ? "open" : "hidden"} `}>
          <div className="location">
            <h2 className="text-xl font-bold mb-3 ">Location</h2>

            <label class="container">
              Remote
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              United States
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              India
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Australia
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Poland
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Canada
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="payment">
            <h2 className="text-xl font-bold my-3 ">Payment</h2>

            <label class="container">
              Verified
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Unverified
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="level">
            <h2 className="text-xl font-bold my-3 ">Level</h2>

            <label class="container">
              Entry
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Intermediate
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>

            <label class="container">
              Expert
              <input type="radio" name="same" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="cards-section flex flex-col px-3 ">
          {
            <>
              <Card
                image={chess}
                title={"Looking for a freelance frontend developer"}
                location={"Virgina, United States"}
                tags={["FrontDev", "WebDev"]}
                verified={true}
              />

              <Card
                image={chess}
                title={"Looking for a freelance frontend developer"}
                location={"Virgina, United States"}
                tags={["FrontDev", "WebDev"]}
                verified={false}
              />

              <Card
                image={chess}
                title={"Looking for a freelance frontend developer"}
                location={"Virgina, United States"}
                tags={["FrontDev", "WebDev"]}
                verified={true}
              />

              <Card
                image={chess}
                title={"Looking for a freelance frontend developer"}
                location={"Virgina, United States"}
                tags={["FrontDev", "WebDev"]}
                verified={true}
              />
            </>
          }
        </div>

        <div className=" profile-section rounded-lg bg-[#1F273C] px-12 pt-12">
          <div className="head-title flex justify-between items-start ">
            <div>
              <h2>Frontend&nbsp;Developer</h2>

              <p className="text-gray-400">Virgina, United States</p>
            </div>
            <p>Posted 4 days ago</p>
          </div>

          <div className="second-section bg-[#15192A] flex justify-between my-8 p-6 rounded-xl ">
            <div className="group">
              <h2>Experience</h2>
              <p className="text-gray-400">Expert</p>
            </div>

            <div className="group">
              {" "}
              <h2>Location</h2>
              <p className="text-gray-400">Virginia, United States</p>
            </div>

            <div className="group">
              {" "}
              <h2>Salary Range</h2>
              <p className="text-gray-400">$1000=$1200/hr</p>
            </div>
          </div>

          <div className="company-section my-6 ">
            <h2 className="font-bold">Company Overview</h2>

            <p className="text-gray-400 my-4 ">
              Dividstar was established in 1932 by Matthew Cohens in Virginia,
              United States. Dividstar has been the leader application for
              personal finance over the past 10 decades and aim to continue
              holding that position. As times continue to evolve, we do too.
            </p>
          </div>

          <div className="company section">
            <h2 className="font-bold">Job Requirements</h2>
            <ul className="jobs text-gray-400">
              <li>4 years of professional working experience.</li>
              <li>Understanding of Next.js, React, and Angular.</li>
              <li>
                Knowledge of REACT tools including React.js, Webpack, Enzyme,
                Redux, and Flux.
              </li>
            </ul>
          </div>

          <button className=" block mt-6 bg-[#005DF9] p-3 py-2 rounded-md text-right ml-auto">
            Apply to Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
