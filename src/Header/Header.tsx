import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconXboxAFilled } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-auto bg-gray-900 px-6 text-white h-20 flex justify-between items-center  bg-gray-900 font-['poppins']">
        <div className="flex gap-3 items-center text-blue-800">
            <IconXboxAFilled className="h-10 w-10"/>
            <div className="text-2xl font-semibold">Jobs.Init</div>
        </div>
        {NavLinks()}
        <div className="flex gap-2 items-center">         
            <div className="flex items-center gap-2">
                <div>Saicharan</div>
                <Indicator inline processing color="bright-sun.4"  offset={6} size={12}>
                <Avatar src="avatar.png" alt="it's me" />
                </Indicator>
            </div>
            <div className="bg-gray-900 p-1.5 rounded-full">
            
                <IconSettings/>
            </div>
            <div  className="bg-gray-900 p-1.5 rounded-full"> <IconBell/></div>
           
        </div>
    </div>
}
export default Header;
