import { useContext, useEffect, useState } from "react";
import { getItemByID } from "../myAPI/API";
import { stateContext } from "../Context/StateContext";
import classNames from "classnames";
import debounce from "lodash.debounce";

export function Detail({ id }) {
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
        {screenSize === "small" && <SmallComponentDetail id={id} />}
        {screenSize === "medium" && <MediumComponentDetail id={id} />}
      </div>
    </>
  );
}

const MediumComponentDetail = ({ id }) => {
  const { isSelected, setIsSelected } = useContext(stateContext);

  const item = getItemByID(id - 1);
  return (
    <>
      <div>
        <div className="flex justify-center -top-4 items-center   relative">
          <div className="bg-white w-[70%] rounded-lg flex items-center ">

            <div className="w-[140px] h-[140px]">
              <img src={item.logo}></img>
            </div>

            <div className=" w-11/12 rounded-lg flex justify-between ">
              <div className="gap-5">
                <div className="text-xl font-bold">{item.company}</div>
                <div className="text-base">{item.website}</div>
              </div>

              <div className="mr-8">
                <button className="h-[48px] w-[147px] rounded text-base font-bold text-violet bg-lightGrey ">
                  Company Site
                </button>
              </div>


            </div>
          </div>
        </div>



        

        <div className="flex justify-center items-center relative mt-10">
          <div
            className={classNames(
              " mt-1 w-[70%]  p-10 bg-white rounded-bl-md flex flex-col justify-center gap-5 items-center ",
              { "bg-veryDarkBlue": isSelected }
            )}
          >
           <div className="flex">
              <div className="space-y-2">
                <div className="flex space-x-4 text-grey text-[16] font-medium">
                  <h1>{item.postedAt}</h1>
                  <h1>.</h1>
                  <h1>{item.contract}</h1>
                </div>
                <div
                  className={classNames(
                    "font-extrabold  text-[20px] text-black",
                    { "text-white": isSelected }
                  )}
                >
                  <h1>{item.position}</h1>
                </div>
                <div className="text-violet font-bold leading-normal ">
                  <h1>{item.location}</h1>
                </div>
              </div>


              <div>
                <button className="h-12 text-white text-base font-extrabold mt-10 bg-violet rounded-md ">
                  Apply Now
                </button>
              </div>
            </div>
         
         
            

            <div className="mt-5">
              <div
                className={classNames("text-black", {
                  "text-grey": isSelected,
                })}
              >
                <div>{item.description}</div>
              </div>

              <div className="justify space-y-10">
                <div className="mt-10 font-bold text-xl">Requirements</div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.requirements.content}
                  <h1>requirements</h1>
                </div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.requirements.items.map((item) => (
                    <li>{item}</li>
                  ))}
                  <h1>names</h1>
                </div>
              </div>

              <div className="justify space-y-10">
                <div className="mt-10 font-bold text-xl">What You Will Do</div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.role.content}
                  <h1>names</h1>
                </div>

                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.role.items.map((item) => (
                    <li>{item}</li>
                  ))}
                  <h1>names</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9 bg-white p-5 ">
        <button className="w-72 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
          Apply Now
        </button>
      </div>
    </>
  );
};

const SmallComponentDetail = ({ id }) => {
  const { isSelected, setIsSelected } = useContext(stateContext);

  const item = getItemByID(id - 1);
  return (
    <>
      <div>
        <div className="flex justify-center -top-4 items-center relative ">
          <div className="absolute -top-[25%] w-[50px] h-[50px] mt-2 flex justify-center items-center bg-violet rounded-2xl">
            <img src={item.logo} className="" alt="profile"></img>
          </div>

          <div
            className={classNames(
              "  -mt-4 w-11/12  p-10 bg-white rounded-md flex flex-col justify-center gap-5 items-center ",
              { "bg-veryDarkBlue": isSelected }
            )}
          >
            <div className="text-xl font-bold">{item.company}</div>
            <div className="text-base">{item.website}</div>
            <div>
              <button className="h-[48px] w-[147px] rounded text-base font-bold text-violet bg-lightGrey ">
                Company Site
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center relative mt-10">
          <div
            className={classNames(
              " mt-1 w-11/12  p-10 bg-white rounded-bl-md flex flex-col justify-center gap-5 items-center ",
              { "bg-veryDarkBlue": isSelected }
            )}
          >
            <div className=" w-11/12 ">
              <div className="space-y-2">
                <div className="flex space-x-4 text-grey text-[16] font-medium">
                  <h1>{item.postedAt}</h1>
                  <h1>.</h1>
                  <h1>{item.contract}</h1>
                </div>
                <div
                  className={classNames(
                    "font-extrabold  text-[20px] text-black",
                    { "text-white": isSelected }
                  )}
                >
                  <h1>{item.position}</h1>
                </div>
                <div className="text-violet font-bold leading-normal ">
                  <h1>{item.location}</h1>
                </div>
              </div>

              <button className="w-11/12 h-12 text-white text-base font-extrabold mt-10 bg-violet rounded-md ">
                Apply Now
              </button>
            </div>

            <div className="mt-5">
              <div
                className={classNames("text-black", {
                  "text-grey": isSelected,
                })}
              >
                <div>{item.description}</div>
              </div>

              <div className="justify space-y-10">
                <div className="mt-10 font-bold text-xl">Requirements</div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.requirements.content}
                  <h1>requirements</h1>
                </div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.requirements.items.map((item) => (
                    <li>{item}</li>
                  ))}
                  <h1>names</h1>
                </div>
              </div>

              <div className="justify space-y-10">
                <div className="mt-10 font-bold text-xl">What You Will Do</div>
                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.role.content}
                  <h1>names</h1>
                </div>

                <div
                  className={classNames("text-black font-normal text-base", {
                    "text-grey": isSelected,
                  })}
                >
                  {item.role.items.map((item) => (
                    <li>{item}</li>
                  ))}
                  <h1>names</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9 bg-white p-5 ">
        <button className="w-72 h-12 text-white text-base font-extrabold bg-violet rounded-md ">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default Detail;
