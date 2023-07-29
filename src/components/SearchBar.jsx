import Filter from "./Filter";
import iconFilter from "/assets/mobile/icon-filter.svg";
import iconSearch from "/assets/desktop/icon-search.svg";
import iconLocation from "/assets/desktop/icon-location.svg";

import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { stateContext } from "../Context/StateContext";

import debounce from "lodash.debounce"; // Optional if you want to use debounce

export function SearchBar() {
  const [screenSize, setScreenSize] = useState("small");

  // Optional: Use debounce for window resize event (to avoid excessive re-renders)
  const handleResize = debounce(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenSize("small");
    } else {
      setScreenSize("medium");
    } 
  }, 300);

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <div>
        {screenSize === "small" && <SmallComponent />}
        {screenSize === "medium" && <MediumComponent />}
        
      </div>
    </>
  );
}

const SmallComponent = () => {
  const [filter, setFilter] = useState(false);
  const { isSelected, setIsSelected, updated, setUpdated } =
    useContext(stateContext);
  const [message, setMessage] = useState();
  const handleClick = () => {
    setUpdated(message);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <div
        className={classNames(
          "mx-auto w-11/12 p-3 -top-8  relative left-0 right-0 z-10 bg-white rounded-lg   ",
          {
            "bg-red transition-all duration-500": isSelected,
          }
        )}
      >
        <div
          className={classNames("flex justify-between items-center pl-3", {
            "bg-veryDarkBlue": isSelected,
          })}
        >
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            className={classNames("focus:outline-0 w-48 h-10", {
              "bg-veryDarkBlue transition-all duration-500 focus:outline-0":
                isSelected,
            })}
            placeholder="Filter by title..."
          />
          <div className="flex items-center gap-3">
            <img
              src={iconFilter}
              onClick={() => setFilter(!filter)}
              className={classNames("p-2 cursor-pointer ", {
                "stroke-current text-white": isSelected,
              })}
            />
            <img
              onClick={handleClick}
              src={iconSearch}
              className="p-3 bg-violet rounded-lg cursor-pointer "
            />
          </div>
          <div className="absolute -bottom-64 w-11/12 bg-white rounded-md">
            {/* {filter && <DimmingOverlay show={true} /> } */}

            {filter && (
              <Filter
                show={true}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const MediumComponent = () => {
  const [filter, setFilter] = useState(false);
  const { isSelected, setIsSelected, updated, setUpdated } =
    useContext(stateContext);
  const [message, setMessage] = useState();
  const handleClick = () => {
    setUpdated(message);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <div
        className={classNames(
          "mx-auto w-11/12 p-3 -top-8  relative left-0 right-0  rounded-lg bg-white ",
          {
            "bg-red transition-all duration-500": isSelected,
          }
        )}
      >
        <div
          className={classNames("flex justify-between items-center pl-3", {
            "bg-veryDarkBlue": isSelected,
          })}
        >
          <div className={classNames("w-1/3 flex gap-2")}>
            <img src={iconSearch} alt="x" className=""></img>
            <input type="text" placeholder="Filter by title" className="w-[85%]"></input>
          </div>
          <div className="h-16 w-[1px] bg-grey"></div>
          <div className={classNames("w-1/3 flex gap-3  ml-2")}>
            <img src={iconLocation} alt="x" className=""></img>

            <input type="text" placeholder="Filter by location" className="w-[85%]"></input>
          </div>
          <div className="h-16 w-[1px] bg-grey"></div>

          <div className={classNames("w-1/3 flex justify-center items-center gap-7 ml-2")}>
            <div>
              <input
                type="checkbox"
                className="max-w-[60px] max-h-[60px] bg-grey"
              ></input>
              <label className="text-[15px] font-semibold">Full Time</label>
            </div>
            <div className="max-w-[80px] max-h-[48px] ">
              <button className="font-extrabold">Search</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
const LargeComponent = () => <p>This is a large component.</p>;

export default SearchBar;
