import { useContext, useState } from "react";
import Filter from "./Filter";
import { stateContext } from "../Context/StateContext";
import classNames from "classnames";


import iconFilter from "/assets/mobile/icon-filter.svg";
import iconSearch from "/assets/desktop/icon-search.svg";
import iconLocation from "/assets/desktop/icon-location.svg";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function List() {
  const [filter, setFilter] = useState(false);
  const [message, setMessage] = useState();
  const [updated, setUpdated] = useState('');
  const { isSelected, setIsSelected } = useContext(stateContext);



  
  const storedData = JSON.parse(localStorage.getItem('jsonData'));
  


  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    setUpdated(message)
  }

  



  return (
    <>
      <div>
        {/* begining of search bar */}
        <div
          className={classNames(
            "mx-auto w-11/12 p-3   relative left-0 right-0 z-10 bg-white rounded-lg ",
            {
              "bg-veryDarkBlue transition-all duration-500": isSelected,
            })}
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
            <div className="absolute w-11/12 bg-white rounded-md">
              {filter ? <Filter /> : ""}
            </div>
          </div>
        </div>
        {/* end of search bar */}
      </div>

      <div className=" mx-auto space-y-16 w-11/12   relative left-0   rounded-lg ">


        {storedData.filter(job => job.position.includes(updated)).map((fileteredJob, index) =>{
          return (
            <Link to="/detail/:id">
              <div
                key={index}

                

                className={classNames("mt-10 bg-white rounded-md", {
                  "bg-veryDarkBlue transition-all duration-700": isSelected,
                })}
              >
                {
                  <Profile
                    id = {fileteredJob.id}
                    logo={fileteredJob.logo}
                    postedAt={fileteredJob.postedAt}
                    position={fileteredJob.position}
                    contract={fileteredJob.contract}
                    location={fileteredJob.location}
                    company={fileteredJob.company}
                  />
                }
              </div>
            </Link>
          );
        })}

        {/* {Data.map((data, key) => {
          return (
            <Link to="/detail">
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
            </Link>
          );
        })} */}




        <div className="max-w-sm mx-auto ">
          <div className=" m flex justify-center mt-20 ">
            <button className="w-36 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );

}
