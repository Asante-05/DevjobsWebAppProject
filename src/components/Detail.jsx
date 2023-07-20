import logo from "/assets/desktop/logo.svg";
import Data from "../data.json";

// const Detail = ({company, postedAt, position, contract, location}) => {
export function Detail() {
  const info = Data;
  return (
    <>
      <div className="flex justify-center items-center relative top-6">
        <div className="absolute -top-[25%] w-[50px] h-[50px] mt-2 flex justify-center items-center bg-violet rounded-2xl">
          <img src={logo} className="" alt="profile"></img>
        </div>

        <div className="  -mt-4 w-11/12  p-10 bg-white rounded-md flex flex-col justify-center gap-5 items-center ">
          <div className="text-xl font-bold">Scoot</div>
          <div className="text-base">Scoot.com</div>
          <div>
            <button className="h-[48px] w-[147px] rounded text-base font-bold text-violet bg-lightViolet">
              Company Site
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center relative mt-10">
        <div className=" mt-1 w-11/12  p-10 bg-white rounded-bl-md flex flex-col justify-center gap-5 items-center ">
          <div className=" w-11/12 ">
            <div className="space-y-2">
              <div className="flex space-x-4 text-grey text-[16] font-medium">
                <h1>1w ago</h1>
                <h1>.</h1>
                <h1>Part time</h1>
              </div>
              <div className="font-extrabold  text-[20px] text-black">
                <h1>Senior Developer</h1>
              </div>
              <div className="text-violet font-bold leading-normal ">
                <h1>United States</h1>
              </div>
            </div>

            <button className="w-11/12 h-12 text-white text-base font-extrabold mt-10 bg-violet rounded-md ">
              Apply Now
            </button>
          </div>

          <div className="mt-5">
            <div>
              <div>{info[0].description}</div>
            </div>

            <div className="justify space-y-10">
              <div className="mt-10 font-bold text-xl">Requirements</div>
              <div className="font-normal text-base">
                {info[0].requirements.content}
              </div>
              <div className="font-normal text-base">
                {info[0].requirements.items.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            </div>

            <div className="justify space-y-10">
              <div className="mt-10 font-bold text-xl">What You Will Do</div>
              <div className="font-normal text-base">
                {info[0].role.content}
              </div>

              <div className="font-normal text-base">
                {info[0].role.items.map((item) => (
                  <li>{item}</li>
                ))}
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
    </>
  );
}
export default Detail;
