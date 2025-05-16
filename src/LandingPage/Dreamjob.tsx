import { Avatar, TextInput } from "@mantine/core";
import boy from "../assets/boy.png";
import google from '../assets/google.png';
import { IconSearch } from "@tabler/icons-react";
import avatar from '../assets/avatar.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import k from '../assets/k.jpg';
const Dreamjob = ()=>{
    return(
       <div className="flex justify-center items-center p-60">

            <div className="w-[55%]">
                <div className="text-6xl text-amber-50 font-bold [&>span]:text-blue-400 leading-tight">Find Your <span>Dream Job</span> With Us</div>
                <div className="text-lg text-amber-50 leading-relaxed">Good life begins with a good company.Start explore thousands of jobs in one place</div>
                <div className="flex  rounded-2xl gap-2 bg-gray-500 mt-0.5">
                <TextInput className="text-amber-50 py-2" label="Job Title" description="" placeholder="Software Engineer"/>
                <TextInput className= "text-amber-50 py-2" label="Job Type" description="" placeholder="Full-Type"/>
                <div className= " flex justify-center items-center h-full w-20 bg-amber-200 rounded-2xl hover:bg-amber-400 cursor-pointer"><IconSearch className="h-[85%] w-[85%] px-2 py-5.5"/></div>
                </div>
            </div>
            <div className="w-[45%] flex items-center justify-center px-2 ">
                <div className="w-full object-cover relative">
                    <img src={k} alt="boy"/>
                    <div className="w-fit -bottom-[20%] -right-10 absolute  border-amber-50 border rounded-lg p-2 backdrop-blur-sm">
                        <div className="text-center text-amber-200 mb-0.1" >10k got job</div>
                        <Avatar.Group>
                        <Avatar src={avatar} />
                        <Avatar src={avatar1} />
                        <Avatar src={avatar2} />
                        <Avatar>+900</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="w-fit -top-10 -right-20 absolute  border-amber-50 border backdrop-blur-sm ">
                        <div className="flex gap-2  items-center p-1">
                            <div className="w-12 h-12 bg-cyan-50 rounded-lg p-1">
                                <img src={google} alt=""/>
                            </div>
                            <div className="text-amber-100 ">
                                <div className="text-sm">Software Engineering</div>
                                <div className="text-xs">New York</div>
                            </div>
                        </div>
                        <div className="flex justify-around text-xs text-amber-100">
                            <span>1 day to go</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    )
}
export default Dreamjob;