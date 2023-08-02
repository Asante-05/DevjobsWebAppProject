import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../Context/StateContext";
import classNames from "classnames";
import data from "../data.json"

import Profile from "./Profile";
import { SearchBar } from "./SearchBar";

export default function List() {
  const [message, setMessage] = useState();
  
  const { isSelected, setIsSelected } = useContext(stateContext);

  const navigate = useNavigate()
  

  const storedData = JSON.parse(localStorage.getItem('jsonData')) || data;
  
  
  const {updated, setUpdated} = useContext(stateContext)
  

  const handleClick = () => {
    setUpdated(message)
  }

  const goto = (item) => {
    navigate(`detail/${item.id}`)
  }

  
  return (
    <>
      <div>
        {/* begining of search bar */}
        <SearchBar/>
        
        {/* end of search bar */}
      </div>

      <div className=" grid-container grid gap-4 mx-auto w-11/12   relative left-0  max-w-6xl rounded-lg phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3  ">


        {storedData.filter(job => job.position.includes(updated)).map((fileteredJob, index) =>{
          return (
          
              <div
                key={index}

                onClick={() => goto(fileteredJob)}
                

                className={classNames("mt-10 rounded-xl  flex max-w-[350px] bg-white", {
                  "bg-veryDarkBlue transition-all duration-700": isSelected
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
            
          );
        })}




      </div>
        <div className="max-w-sm mx-auto ">
          <div className=" flex justify-center mt-20">
            <button className={classNames("w-36 h-12 text-white text-base font-extrabold bg-violet rounded-md  hover:bg-lightViolet")}>
              Load More
            </button>
          </div>
        </div>
    </>
  );

}
