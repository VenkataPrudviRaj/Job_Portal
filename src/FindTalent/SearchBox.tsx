import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJob/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
import { Input } from "@mantine/core";

const SearchBox = () => {
  const [value, setValue] = useState<[number, number]>([0, 80]);
    return (
      <div className="flex px-5 py-8">
        <div className="flex items-center gap-1">
        <div className="p-0.5 bg-amber-50 text-black rounded-full">
            <IconUserCircle size={20}/></div>
            <Input className="[&_input]:!placeholder-amber-50" variant="unstyled" placeholder="Talent Name" />
                
        </div>
        
        
        {searchFields.map((item, index) => (
          <><div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider mr = "xs" size="xs" orientation="vertical" />
          </>
        ))}
        <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
          
        </div>
        <RangeSlider size="xs" value={value} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }} labelAlwaysOn onChange={setValue} />
        </div>

      </div>
    );
  };
  
export default SearchBox;