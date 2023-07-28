import moonSvg from "/assets/desktop/icon-moon.svg";
import sunSvg from "/assets/desktop/icon-sun.svg";
import logo from "/assets/desktop/logo.svg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Detail from "./components/Detail";
import { useContext, useState } from "react";
import classNames from "classnames";
import { stateContext } from "./Context/StateContext";
import List from "./components/List";
import { extractIdFromLocation, storeData } from "./myAPI/API";

const App = () => {
  const storedData = JSON.parse(localStorage.getItem("jsonData"));

  // const [filter, setFilter] = useState(false);
  const { isSelected, setIsSelected } = useContext(stateContext);

  const location = useLocation();
  const id = extractIdFromLocation(location);

  // storeData()

  return (
    <>
      <div
        className={classNames("min-h-screen bg-lightGrey ", {
          "bg-midnight transition-all duration-500": isSelected,
        })}
      >
        <header className="relative ">
          {/* <img src={mobileHeaderBanner} className="w-full" alt="banner" /> */}
          <img
            className="w-full h-48  phone:h-[160px] tablet:h-[160px] laptop:h-[160px] "
            srcSet="/assets/mobile/bg-pattern-header.svg 480w,
                    /assets/tablet/bg-pattern-header.svg 768w,
                    /assets/desktop/bg-pattern-header.svg 1024w"

            sizes="(max-width: 600px) mobile,
                    (max-width: 960px) tablet,
                    laptop"
            src="/assets/mobile/bg-pattern-header.svg"
            alt="Responsive Image"
          />
          

          <div className="absolute z-10 top-0 w-full">
            <div className="flex justify-between p-10">
              <img src={logo} alt="logo" className="h-10" />

              <div className="flex h-10  justify-center items-center">
                <img src={sunSvg} className="text-veryDarkBlue m-2" alt="sun" />

                <div
                  onClick={() => setIsSelected(!isSelected)}
                  className={classNames(
                    "flex w-10 h-5 bg-white  rounded-full",
                    {
                      " transition-all duration-500": isSelected,
                    }
                  )}
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
            className={classNames("relative ", { "bg-midnight": isSelected })}
          >
            <>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/detail/:id" element={<Detail id={id} />} />
              </Routes>
            </>
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
