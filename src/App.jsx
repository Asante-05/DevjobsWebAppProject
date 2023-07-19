import mobileHeaderBanner from "/assets/mobile/bg-pattern-header.svg";
import iconFilter from "/assets/mobile/icon-filter.svg";
import moonSvg from "/assets/desktop/icon-moon.svg";
import sunSvg from "/assets/desktop/icon-sun.svg";
import iconSearch from "/assets/desktop/icon-search.svg";
import logo from "/assets/desktop/logo.svg";
import iconLocation from "/assets/desktop/icon-location.svg";
import iconCheck from "/assets/desktop/icon-check.svg";
import bgPatternDetailFooter from "/assets/desktop/bg-pattern-detail-footer.svg";

import { BrowserRouter as Router, Link, Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Data from "./data.json";
import Profile from "./components/Profile";
import { useContext, useState } from "react";
import classNames from "classnames";
import Filter from "./components/Filter";
import { stateContext } from "./Context/StateContext";


const App = () => {
  const [filter, setFilter] = useState(false);
  const {isSelected, setIsSelected} = useContext(stateContext)

  return (
    <div>
      
     {/* <Detail/> */}


    <div
      className={classNames("min-h-screen bg-lightGrey pb-20", {
        "bg-midnight transition-all duration-500": isSelected,
      })}
    >
      <header className="relative">
        <img src={mobileHeaderBanner} className="w-full" alt="banner" />
        <div className="absolute z-10 top-0 w-full">
          <div className="flex justify-between p-10">
            <img src={logo} alt="logo" className="h-10" />

            <div className="flex h-10  justify-center items-center">
              <img src={sunSvg} className="text-veryDarkBlue m-2" alt="sun" />

              <div
                onClick={() => setIsSelected(!isSelected)}
                className={classNames("flex w-10 h-5 bg-white  rounded-full", {
                  " transition-all duration-500": isSelected,
                })}
              >

                <span
                  className={classNames(
                    "h-5 w-5 bg-violet rounded-full transition-all duration-500 shadow-lg",
                    {
                      "ml-5": isSelected,
                    }
                  )}
                ></span>
              </div>

              <img src={moonSvg} className="text-white m-2" alt="moon" />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "w-11/12 mx-auto p-3 absolute top-[75%] left-0 right-0 z-10 bg-white rounded-lg ",
            {
              "bg-veryDarkBlue transition-all duration-500": isSelected,
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
                src={iconSearch}
                className="p-3 bg-violet rounded-lg cursor-pointer "
              />
            </div>
            <div className="absolute w-11/12 bg-white rounded-md">
              {filter ? <Filter /> : ""}
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 max-w-sm mx-auto ">
        
        {Data.map((data, key) => {
          return (
            
            <div
              key={key}
              className={classNames("mt-10 bg-white rounded-md", {
                "bg-veryDarkBlue transition-all duration-700": isSelected,
              })}
            >
              
              {
                <Profile
                  logo={data.logo}
                  postedAt={data.postedAt}
                  position={data.position}
                  contract={data.contract}
                  location={data.location}
                  company={data.company}
                />
              }
             
    
            </div>
           
          );
        })}
        <div className="flex justify-center mt-9 ">
          <button className="w-36 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
            Load More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
