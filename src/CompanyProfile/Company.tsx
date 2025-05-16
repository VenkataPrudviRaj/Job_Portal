import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import AboutComp from "./AboutComp";

const Company = () => {
  return (
    <div className="w-2/3 relative px-3">
      <img className="rounded-t-2xl w-full" src="/Profile/banner.jpg" alt="Banner" />
      <img
        className="rounded-2xl w-36 h-36  bg-amber-50 absolute top-[20%] -bottom-1/4 left-15 border-black border-4"
        src="/Icon/Google.png"
        alt="Company Logo"
      />

      <div className="px-3 mt-1 py-5">
        <div className="text-3xl font-semibold flex justify-between pt-2">
          Google
          <Avatar.Group>
            <Avatar src="/avatar.png" />
            <Avatar src="/avatar1.png" />
            <Avatar src="/avatar2.png" />
            <Avatar>+5</Avatar>
          </Avatar.Group>
        </div>   
        <div className="text-xl flex gap-1 items-center mt-2">
          <IconMapPin className="h-5 w-5" />
          New York, United States
        </div>
      </div>
      <Divider my="md" />
    <div className="[&_button]:!text-lg !font-semibold [&_button[data-active='true']]:!text-blue-500">
         <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs">Second panel</Tabs.Panel>
      <Tabs.Panel value="employees">Emp</Tabs.Panel>
    </Tabs>
    </div>
      
    </div>
  );
};

export default Company;
