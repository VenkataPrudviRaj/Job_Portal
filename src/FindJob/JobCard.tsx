import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClock } from "@tabler/icons-react";
import { jobList } from "../Data/JobsData";
import { Link } from "react-router-dom";

const JobCard = (props:any)=>{
    return(
        <Link to="/Jobs" className="bg-amber-50/25 w-80  rounded-xl hover:shadow-[0_0_5px_1px_yellow]! shadow-amber-50">
            <div className=" mt-2 flex p-3  justify-between ">
                <div className="flex gap-2 items-center ">
                    <div className="w-12 h-12 p-2">                      
                        <img src={`/Icon/${props.company}.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-semibold text-black">{props.jobTitle}</div>
                        <div className="text-sm">{props.company} &#x2022;  {props.applicants} Applicants</div>
                    </div>
                </div>
                <IconBookmark/>
            </div>
            <div className="flex gap-3  [&>div]:text-amber-300 [&>div]:rounded-lg [&>div]:bg-amber-50/25 [&>div]:text-xs ml-2">
                <div className="border border-amber-50 p-1"> {props.experience}</div>
                <div className="border border-amber-50 p-1">{props.jobType}</div>
                <div className="border border-amber-50 p-1">{props.location}</div>
            </div>
            <Text className="!text-xs !ml-2.5 !mb-2 !mt-2.5 !text-amber-50" lineClamp={2}>
            {props.description}
    </Text>
    <Divider size="xs"/>
            <div className="flex justify-between [&>div]:!text-xs !ml-2 !pt-2">
                <div className="font-semibold ">&#8377;{props.package}</div>
                <div className="flex items-center"><IconClock/>{props.postedDaysAgo} days ago</div>
            </div>
        </Link>
    )
}
export default JobCard;