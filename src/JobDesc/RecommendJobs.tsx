import { jobList } from "../Data/JobsData";
import JobCard from "../FindJob/JobCard";

const RecommendedJobs = ()=>{
    return(
        <div className=" ">
            <div className="text-xl font-semibold py-2">Recommended Jobs</div>
            <div className="flex flex-col gap-3 flex-wrap gap-2 ">
                {jobList.map((job,index)=> index < 6 &&<JobCard key={index} {...job}/>)}
            </div>
        </div>    
    )
}
export default RecommendedJobs;