import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () =>{
    return(
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold flex items-center justify-center">
        How it<span className="ml-2 text-blue-500">Works</span>
      </div>
      <div className="m-auto text-lg w-1/2 text-center text-amber-100 py-1">
        Effectlessly navigate through the process and land your dream job.
      </div>
      <div className="flex px-16 justify-between items-center">
        <div className="relative">
            <img className="w-[30rem]" src="/Working/Girl.png" alt="Girl"/>
            <div className=" backdrop-blur-md w-36 flex flex-col items-center border px-1 py-3 border-amber-300 rounded-lg top-[15%] right-0 absolute ">
                    <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me" />
                        <div className="text-amber-50 text-lg text-center">Complete your profile</div>
                        <div className="text-amber-50 text-sm">70% completed </div>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            {
                work.map((item,index)=><div key={index} className="flex items-center  ">
                <div className="p-2.5 bg-amber-300 rounded-full">
                    <img className="h-8 w-8 "src={`/Working/${item.img}.png`} alt={item.name}/>
                </div>
                <div className="ml-2">
                    <div className="font-semibold text-amber-100"> {item.name}</div>
                    <div className="text-amber-100">{item.desc}</div>
                </div>
            </div>)
            }
        </div>
      </div>
        </div>
    )
}
export default Working;