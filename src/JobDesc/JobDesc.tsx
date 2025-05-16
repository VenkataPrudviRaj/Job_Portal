import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";
const JobDesc = ()=>{
    const data =  DOMPurify.sanitize(desc);
    return(
        <div className="w-2/3 ">
             <div className=" mt-2 flex p-3  justify-between ">
                <div className="flex gap-2 items-center ">
                    <div className="w-21 h-21 p-2 rounded-lg bg-amber-50/20" >                      
                        <img src={`/Icon/Google.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-semibold text-2xl text-amber-50">Software Engineer 111</div>
                        <div className="text-lg">Google &#x2022; 3 days ago &#x2022;  48 Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to="/apply-jobs">
                        <Button size="sm" variant="light" >Apply</Button>
                    </Link>
                    <IconBookmark className="text-blue-400 cursor-pointer"/>
                </div>
            </div>
            <Divider my="md"/>
                <div className="flex justify-between p-2 ">
                    {
                        card.map((item:any,index:any)=><div className="flex flex-col items-centergap-1">
                        <item.icon className="!h-12 !w-12" variant="light"  radius="xl" aria-label="Settings">
                        <IconMapPin className="h-4/5 w-4/5" stroke={1.5} />
                        </item.icon>
                        <div className="">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                        </div>)
                    }                            
                </div>
                <Divider my="md"/>
                <div className="p-2">
                    <div className="text-xl mb-5 font-semibold">Required Skills</div>
                    <div className="flex flex-wrap gap-2 ">
                    {
                        skills.map((item:any,index:any)=><ActionIcon key={index} className="!h-fit !w-fit font-medium !text-sm" variant="light" p="xs" radius="xl" aria-label="Settings">
                        {item}    
                    </ActionIcon>)
                    }
                    
                    </div>
                </div>
                <Divider my="md"/>
                <div className="[&_h4]:font-semibold [&_h4]:text-xl [&_h4]:my-4  [&_p]:text-justify px-5" dangerouslySetInnerHTML={{__html:data}}>
               </div>
               <Divider my="md"/>
               <div>
                    <div className="text-xl font-semibold mb-5">Company</div>
                    <div className=" mt-2 flex p-3  justify-between ">
                <div className="flex gap-2 items-center ">
                    <div className="w-14 h-14 p-2 rounded-lg bg-amber-50/20" >                      
                        <img src={`/Icon/Google.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-medium text-lg text-amber-50">Google</div>
                        <div className="">10k+ Employees</div>
                    </div>
                </div>
                
                    <Link to="/Company">
                        <Button size="sm" variant="light" >Company Page</Button>
                    </Link>
            </div>
            <div className="text-sm px-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit cum earum necessitatibus temporibus enim aperiam quae, ut labore optio odit distinctio officia minima blanditiis id praesentium? Suscipit nesciunt numquam molestiae nulla, quisquam, consequatur quibusdam fuga placeat quia, atque laborum necessitatibus corporis at reprehenderit? Dolorum maiores amet dolore nemo rerum.</div>
                
               </div>
        </div>
    )
}
export default JobDesc; 