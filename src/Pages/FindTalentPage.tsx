import { Divider } from "@mantine/core";
import SearchBox from "../FindTalent/SearchBox";
import Talents from "../FindTalent/Talents";

const FindTalentPage = ()=>{
    return(
        <div className="min-h-[90vh] bg-gray-900">
            <SearchBox/>
            <Divider size="xs"/>
            <Talents/>
        </div>
    )
}
export default FindTalentPage;