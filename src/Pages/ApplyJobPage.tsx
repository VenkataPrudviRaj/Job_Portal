import { Button } from "@mantine/core";
import { IconCircleArrowLeftFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = ()=>{
    return(
        <div className="min-h-[90vh] bg-gray-900">
            <Link to="/Jobs" className="my-2 inline-block">                
                <Button leftSection ={<IconCircleArrowLeftFilled size={20}/>}   variant="light" >Back</Button>
            </Link>
            <ApplyJobComp/>
        </div>
    )
}
export default ApplyJobPage;