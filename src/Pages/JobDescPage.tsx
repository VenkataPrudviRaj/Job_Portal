import { Button, Divider } from "@mantine/core";
import { IconCircleArrowLeftFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendJobs";

const JobDescPage = ()=>{
    return(
        <div className="min-h-[90vh] bg-gray-900">
            <Link to="/Find-Jobs" className="my-2 inline-block">                
                <Button leftSection ={<IconCircleArrowLeftFilled size={20}/>}   variant="light" >Back</Button>
            </Link>
            <div className="flex gap-5 justify-around" >
                <JobDesc/>
                <RecommendedJobs/>
            </div>
        </div>
    )
}
export default JobDescPage;