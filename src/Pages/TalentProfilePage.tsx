import { Button, Divider } from "@mantine/core";
import { IconCircleArrowLeftFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () =>{
    return(
        <div className="min-h-[90vh] bg-gray-900">
            <Divider size="xs"/>
            <Link to="/Find-Talent" className="my-2 inline-block">                
                <Button leftSection ={<IconCircleArrowLeftFilled size={20}/>}   variant="light" >Back</Button>
            </Link>
            <div className="flex gap-5" >
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
        </div>
    )
}
export default TalentProfilePage;