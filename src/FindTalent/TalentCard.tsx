import { Button, Divider, Text } from "@mantine/core";
import {  IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentCard = (props:any) =>{
    return(
        <div className="bg-amber-50/25 w-96 h-65  rounded-xl hover:shadow-[0_0_5px_1px_yellow]! shadow-amber-50">
            <div className=" mt-1 flex p-3 pb-0 justify-between ">
                <div className="flex gap-2 items-center ">
                    <div className="w-18 p-2">                      
                        <img  className= "rounded-full " src={`/${props.image}.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-semibold text-black">{props.name}</div>
                        <div className="text-sm">{props.role} &#x2022;  {props.company}</div>
                    </div>
                </div>
                <IconHeart/>
            </div>
            <div className="flex gap-3   [&>div]:text-amber-300 [&>div]:rounded-lg [&>div]:bg-amber-50/25 [&>div]:text-xs ml-2 ">
            {
                props.topSkills.map((skill:string,index:number)=> <div key={index} className="border border-amber-50 p-1"> {skill}</div> )
            }
                
            </div>
            <Text className="!text-xs !ml-2.5 !mb-2 !mt-2.5 !text-amber-50" lineClamp={3}>
           {props.about}
    </Text>
    <Divider size="xs"/>
            <div className="flex justify-between [&>div]:!text-xs !ml-2 !pt-2">
      <div className="font-semibold text-amber-50 !text-4xl ">&#8377;{props.expectedCtc}</div>
                <div className="flex items-center"><IconMapPin/>{props.location}</div>
            </div>
            <Divider size="xs"/>
            <div className="flex gap-2 [&>*]:w-1/2 [&>*]:p-0.5 mb-2 ml-2">
            <Link to="/talent-profile">
             <Button variant="outline" fullWidth>Profile</Button>
            </Link>
            <div>
            <Button variant="light" fullWidth>Message</Button>
            </div>
            
        </div>
        </div>
    )
}
 export default TalentCard;