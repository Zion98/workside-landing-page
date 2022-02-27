import React from "react";

const Card = ({ image, title, location, tags, verified }) => {
  return (
    <div className="single__card bg-[#191F30] rounded-lg inline-block p-6 mb-6">
      <div className="topfirst flex ">
        <div>
          <img src={image} alt="firstjob" />
        </div>

        <div className="pl-3">
          <h2>{title}</h2>
          <div className="flex items-center">
            {" "}
            <svg
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99999 1.83333C8.13066 1.83333 9.99999 3.57867 9.99999 5.568C9.99999 7.63 8.33799 10.3227 5.99999 14.0087C3.66199 10.3227 1.99999 7.63 1.99999 5.568C1.99999 3.57867 3.86932 1.83333 5.99999 1.83333ZM5.99999 0.5C3.20132 0.5 0.666656 2.76867 0.666656 5.568C0.666656 8.36667 2.97932 11.708 5.99999 16.5C9.02066 11.708 11.3333 8.36667 11.3333 5.568C11.3333 2.76867 8.79932 0.5 5.99999 0.5V0.5ZM5.99999 7.83333C4.89532 7.83333 3.99999 6.938 3.99999 5.83333C3.99999 4.72867 4.89532 3.83333 5.99999 3.83333C7.10466 3.83333 7.99999 4.72867 7.99999 5.83333C7.99999 6.938 7.10466 7.83333 5.99999 7.83333Z"
                fill="#8F9BB3"
              />
            </svg>
            <span className="ml-1 text-gray-400 location">{location}</span>
          </div>
        </div>
      </div>

      <div className="bottomfirst flex mt-4">
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className={`bg-[#000000] p-2 rounded-lg ${
                index !== 0 ? "ml-3" : null
              }`}
            >
              {" "}
              {tag}
            </p>
          );
        })}

        <div className="verify flex items-center ml-12 ">
          {verified === true ? (
            <>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.25"
                  width="22"
                  height="21.5"
                  rx="10.75"
                  fill="#005DF9"
                />
                <path
                  d="M15.1425 6.25L9.5 12.0335L6.857 9.528L5 11.386L9.5 15.75L17 8.1075L15.1425 6.25Z"
                  fill="white"
                />
              </svg>

              <span className="ml-2 inline-block payment">
                Payment Verified
              </span>
            </>
          ) : (
            <>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6425 6.25L10 12.0335L7.357 9.528L5.5 11.386L10 15.75L17.5 8.1075L15.6425 6.25Z"
                  fill="#8F9BB3"
                />
                <rect
                  x="1"
                  y="0.75"
                  width="21"
                  height="20.5"
                  rx="10.25"
                  stroke="#8F9BB3"
                />
              </svg>

              <span className="ml-2 inline-block payment">
                Payment Unverified
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
