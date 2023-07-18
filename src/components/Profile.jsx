const Profile = ({ logo, company, postedAt, position, contract, location }) => {
  return (
    <>
      <div className="p-10 rounded-lg  relative">
        <div className="absolute -top-[25%] w-[50px] h-[50px] mt-10 flex justify-center items-center bg-violet rounded-2xl">
          <img src={logo} className="" alt="profile"></img>
        </div>

        <div className="h-147 w-286">
          <div className="flex space-x-4 text-grey text-[16] font-medium">
            <h1>{postedAt}</h1><h1>.</h1><h1>{contract}</h1>
          </div>
          <div className="font-extrabold mt-3 text-[20px] text-white">
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
