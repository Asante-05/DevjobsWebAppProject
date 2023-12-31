import Filter from "./Filter";
import iconFilter from "/assets/mobile/icon-filter.svg";
import iconSearch from "/assets/desktop/icon-search.svg";
import iconSearchWhite from "/assets/desktop/icon-search-white.svg";
import iconLocation from "/assets/desktop/icon-location.svg";

import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { stateContext } from "../Context/StateContext";


export function SearchBar() {
  return (
    <>
      <div className='tablet:hidden'>
        <SmallComponent/>
      </div>
      <div className='hidden tablet:flex'>
        <MediumComponent/>
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
          "mx-auto w-11/12 p-3 -top-8  relative left-0 right-0 z-10 bg-veryDarkBlue rounded-lg   ",
          {
            "bg-white transition-all duration-500": !isSelected,
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
              "bg-veryDarkBlue text-white transition-all duration-500 focus:outline-0":
                isSelected,
            })}
            placeholder="Filter by title..."
          />
          <div className="flex items-center gap-3">
            <img
              src={iconFilter}
              onClick={() => setFilter(!filter)}
              className={classNames("p-2 cursor-pointer ", {
                "": isSelected,
              })}
            />
            <img
              onClick={handleClick}
              src={iconSearchWhite}
              className="p-3 bg-violet rounded-lg cursor-pointer "
            />
          </div>
          <div className="absolute -bottom-64 w-11/12  bg-white rounded-md">
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
          "bg-veryDarkBlue transition-all duration-500 mx-auto w-[85%] p-3 -top-8  relative left-0 right-0  rounded-lg"
          ,
          {
            " bg-white" : !isSelected,
          }
        )}
      >
        <div
          className={classNames("flex justify-between items-center pl-3", {
            "bg-veryDarkBlue": isSelected,
          })}
        >
          <div className={classNames("w-1/3 flex gap-2")}>
            <img src={iconSearch} alt="x" id="searchIcon" className=" m-3"/>
            <input type="text" placeholder="Filter by title" className={classNames("w-[85%] focus:outline-0", {'bg-veryDarkBlue text-white' : isSelected})}></input>
          </div>
          <div className="h-16 w-[1px] bg-grey"></div>
          <div className={classNames("w-1/3 flex gap-3  ml-2")}>
            <img src={iconLocation} alt="x" className=""></img>

            <input type="text" placeholder="Filter by location" className={classNames("w-[85%] focus:outline-0", {'bg-veryDarkBlue text-white' : isSelected})}></input>
          </div>
          <div className="h-16 w-[1px] bg-grey"></div>

          <div className={classNames("w-1/3 flex justify-center items-center gap-16 ml-2")}>
            <div>
              <input
                type="checkbox"
                className="max-w-[60px] max-h-[60px] bg-grey text-[25px]"
              ></input>
              <label className={classNames("text-[15px] font-semibold", {"text-white" : isSelected})}>Full Time Only</label>
            </div>
            <div className="min-w-[120px] min-h-[48px] bg-lightViolet rounded-lg flex justify-center  items-center">
              <button className="font-extrabold bg-none w-100px text-white ">Search</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};


export default SearchBar;
