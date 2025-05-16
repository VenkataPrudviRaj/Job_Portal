import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = ()=>{
    return(
        <div className=" ">
            <div className="text-xl font-semibold">Recommended Talent</div>
            <div className="flex flex-col gap-3 flex-wrap ">
                {talents.map((talent,index)=> index < 4 &&<TalentCard key={index} {...talent}/>)}
            </div>
        </div>        
    )
}
export default RecommendTalent;