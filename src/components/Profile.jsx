import { useContext } from "react";
import { stateContext } from "../Context/StateContext";
import classNames from "classnames";

const Profile = ({ id, logo, company, postedAt, position, contract, location }) => {
  const { isSelected } = useContext(stateContext);


  return (
    <>
      <div className={classNames("p-10 rounded-lg  min-h-[147px] min-w-[350px] bg-white  relative ", {"bg-veryDarkBlue" : isSelected})}>
        <div className="absolute -top-[25%] w-[50px] min-h-[50px] mt-10 flex justify-center items-center bg-violet rounded-2xl">
          <img src={logo} className="" alt="profile"></img>
        </div>

      <div className={classNames("min-h-[147px] min-w-286", { "bg-veryDarkBlue" : isSelected})}>
          <div className="flex space-x-4 text-grey text-[16] font-medium">
            <h1>{postedAt}</h1><h1>.</h1><h1>{contract}</h1>
          </div>
          <div className={classNames("font-extrabold mt-3 text-[20px] text-black", {"text-white hover:text-grey" : isSelected})}>
            <h1>{position}</h1>
          </div>
          <div className="text-grey font-normal text-[16px] mt-3">
            <h1>{company}</h1>
          </div>
          <div className="text-lightViolet font-bold leading-normal mt-10">
            <h1>{location}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
