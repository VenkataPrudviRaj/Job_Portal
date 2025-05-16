import { Button, Divider } from "@mantine/core";
import { IconCircleArrowLeftFilled } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";

const CompanyProfilePage = ()=>{
    const navigate = useNavigate();
        return(
        <div className="min-h-[90vh] bg-gray-900">
            <Divider size="xs"/>
                      
                <Button onClick={()=>navigate(-1)} my = "md" leftSection ={<IconCircleArrowLeftFilled size={20}/>}   variant="light" >Back</Button>
           
            <div className="flex gap-5" >
                <Company/>
            </div>
        </div>
    )
}
export default CompanyProfilePage;