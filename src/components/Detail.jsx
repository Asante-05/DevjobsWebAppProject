import mobileHeaderBanner from "/assets/mobile/bg-pattern-header.svg";
import iconFilter from "/assets/mobile/icon-filter.svg";
import moonSvg from "/assets/desktop/icon-moon.svg";
import sunSvg from "/assets/desktop/icon-sun.svg";
import iconSearch from "/assets/desktop/icon-search.svg";
import logo from "/assets/desktop/logo.svg";
import iconLocation from "/assets/desktop/icon-location.svg";
import iconCheck from "/assets/desktop/icon-check.svg";
import bgPatternDetailFooter from "/assets/desktop/bg-pattern-detail-footer.svg";
import Profile from "./Profile";

import classNames from "classnames";
import { useCallback, useContext } from "react";
import { stateContext } from "../Context/StateContext";

// const Detail = ({company, postedAt, position, contract, location}) => {
const Detail = () => {
   const [isSelected, setIsSelected] = useContext(stateContext)
  return (
    <>
      <div className={classNames("min-h-screen bg-lightGrey pb-20")}>
        <header className="relative">
          <img src={mobileHeaderBanner} className="w-full" alt="banner" />
          <div className="absolute z-10 top-0 w-full">
            <div className="flex justify-between p-10">
              <img src={logo} alt="logo" className="h-10" />

              <div className="flex h-10  justify-center items-center">
                <img src={sunSvg} className="text-veryDarkBlue m-2" alt="sun" />

                <div
                  onClick={() => setIsSelected(!isSelected)}
                  className={classNames("flex w-10 h-5 bg-white  rounded-full")}
                >
                  <span
                    className={classNames(
                      "h-5 w-5 bg-violet rounded-full transition-all duration-500 shadow-lg"
                    )}
                  ></span>
                </div>

                <img src={moonSvg} className="text-white m-2" alt="moon" />
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "w-11/12 mx-auto p-3 absolute top-[75%] left-0 right-0 z-10 bg-white rounded-lg "
            )}
          >
            <div
              className={classNames("flex justify-between items-center pl-3")}
            >
              <input
                type="text"
                className={classNames("focus:outline-0 w-48 h-10")}
                placeholder="Filter by title..."
              />
              <div className="flex items-center gap-3">
                <img
                  src={iconFilter}
                  // onClick={() => setFilter(!filter)}
                  className={classNames("p-2 cursor-pointer ")}
                />
                <img
                  src={iconSearch}
                  className="p-3 bg-violet rounded-lg cursor-pointer "
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex justify-center items-center relative mt-10">
          <div className="absolute -top-[25%] w-[50px] h-[50px] mt-24 flex justify-center items-center bg-violet rounded-2xl">
            {/* <img src={logo} className="" alt="profile"></img> */}
          </div>

          <div className=" mt-14 w-11/12  p-10 bg-white rounded-bl-md flex flex-col justify-center gap-5 items-center ">
            <div className="text-xl font-bold">Scoot</div>
            <div className="text-base">Scoot.com</div>
            <div>
              <button className="text-base font-bold">Company Site</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center relative mt-10">
          <div className=" mt-14 w-11/12  p-10 bg-white rounded-bl-md flex flex-col justify-center gap-5 items-center ">
            <div className=" w-11/12 ">
              <div className="flex space-x-4 text-grey text-[16] font-medium">
                <h1>1w ago</h1>
                <h1>.</h1>
                <h1>Part time</h1>
              </div>
              <div className="font-extrabold mt-3 text-[20px] text-black">
                <h1>Senior Developer</h1>
              </div>
              <div className="text-lightViolet font-bold leading-normal mt-10">
                <h1>United States</h1>
              </div>
              <button className="w-11/12 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
                Apply Now
              </button>
            </div>

            <div>
              <div>
                plenty text
              </div>
              <div>
                <header>Requirements</header>
                <div>
                  description
                </div>
                <div>
                  Unordered Lise
                </div>
              </div>
              <div>
                <header>What you will do</header>
                <div>
                  description
                </div>
                <div>
                  Ordered List
                </div>
              </div>
            </div>



          </div>
        </div>

        <div className="flex justify-center mt-9 ">
          <button className="w-72 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};
export default Detail;
