import { getItemByID } from "../myAPI/API";


export function Detail({id}) {

  const item = getItemByID(id-1)
  
  
  return (
    <>
      <div className="flex justify-center items-center relative top-6">
        <div className="absolute -top-[25%] w-[50px] h-[50px] mt-2 flex justify-center items-center bg-violet rounded-2xl">
          <img src={item.logo} className="" alt="profile"></img>
        </div>

        <div className="  -mt-4 w-11/12  p-10 bg-white rounded-md flex flex-col justify-center gap-5 items-center ">
          <div className="text-xl font-bold">{item.company}</div>
          <div className="text-base">{item.website}</div>
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
                <h1>{item.postedAt}</h1>
                <h1>.</h1>
                <h1>{item.contract}</h1>
              </div>
              <div className="font-extrabold  text-[20px] text-black">
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
            <div>
              <div>
                {item.description}

                </div>
            </div>

            <div className="justify space-y-10">
              <div className="mt-10 font-bold text-xl">Requirements</div>
              <div className="font-normal text-base">
                {item.requirements.content}
                <h1>requirements</h1>
              </div>
              <div className="font-normal text-base">
                {item.requirements.items.map((item) => (
                  <li>{item}</li>
                ))}
                <h1>names</h1>
              </div>
            </div>

            <div className="justify space-y-10">
              <div className="mt-10 font-bold text-xl">What You Will Do</div>
              <div className="font-normal text-base">
                {item.role.content}
                <h1>names</h1>
              </div>

              <div className="font-normal text-base">
                {item.role.items.map((item) => (
                  <li>{item}</li>
                ))}
                <h1>names</h1>
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
