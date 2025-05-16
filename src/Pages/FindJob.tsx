import { Divider } from "@mantine/core";
import MultiInput from "../FindJob/MultiInput";
import SearchBox from "../FindJob/SearchBox";
import Jobs from "../FindJob/Jobs";

const FindJob = ()=>{
    return(
        <div className="min-h-[100vh] bg-gray-900 ">       
            <SearchBox/>
            <Divider size="xs" />    
            <Jobs/>
            
            
        
        
        </div>
    )
}
export default FindJob;