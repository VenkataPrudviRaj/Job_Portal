import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props:any) =>{
    return(
        <div className="w-2/3 relative px-3">
            <img className ="rounded-t-2xl " src="/Profile/banner.jpg"/>
            <img className="rounded-full w-48 h-48 top-0/6 left-10 absolute border-black border-4 " src="/avatar.png"/>
            <div className="px-3 ">
         </div>
         <div className="px-3 mt-1 py-5">
                <div className="text-3xl font-semibold flex justify-between pt-2">{props.name} <Button className="" variant="outline">Message</Button></div>
                <div className="text-xl flex gap-1 items-center "><IconBriefcase className="h-5 w-5"/> {props.role} &bull; {props.company}</div>                
                <div className="flex items-center"><IconMapPin className="h-5 w-5"/>{props.location}</div>
         </div>
         <Divider my="md"/>
         <div className="">
            <div className="text-2xl font-semibold ">About</div>
            <div className="text-sm">{props.about}</div>
         </div>
        <Divider my="xs"/>
        <div className="">
            <div className="font-semibold text-2xl py-2" >Skills</div>
            <div className="flex flex-wrap gap-1">
                {
                    props.skills.map((skill:any,index:any)=><div key={index} className="bg-sky-700 bg-opacity-15 text-sm font-medium rounded-3xl px-3 py-1">{skill}</div>)
                }
            </div>
        </div>
        <Divider my="xs"/>
        <div className="">
            <div className="text-2xl font-semibold">Experience</div>
            <div>
                {
                    props.experience.map((exper:any,index:any)=> <ExpCard key={index} {...exper}/>)
                }
            </div>
           
        </div>
        <Divider my="xs"/>
        <div className="">
            <div className="text-2xl font-semibold">Certifications</div>
            <div>
                {
                    props.certifications.map((certi:any,index:any)=> <CertiCard key={index} {...certi}/>)
                }
            </div>
            
        </div>
        </div> 
        
    )
}
export default Profile;