import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = ()=>{
    return(
        <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold flex items-center justify-center">
        What<span className="ml-2 text-blue-500">User+</span> <span className="ml-2">Says About Us</span>
        </div>
        <div className="flex justify-evenly ">
            {
                testimonials.map((data,index)=><div key={index} className="flex flex-col rounded-xl border border-amber-300 w-[22%] p-3 mt-10 ">
                <div className="flex gap-2 items-center ">
                    <Avatar className="!h-16 !w-16" src="avatar.png" alt="it's me" />
                    <div>
                        <div className="text-lg font-semibold text-amber-50">{data.name}</div>
                        <Rating value={data.rating} fractions={2} readOnly />;
                    </div>
                </div>
                <div className="text-sm text-emerald-50">
                    {data.testimonial}
                </div>
                
            </div>)
            }
        </div>
    </div>
    )
}
export default Testimonials;