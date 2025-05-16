import {  IconBrandFacebook, IconBrandInstagram, IconBrandX, IconXboxAFilled } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";

const Footer = () =>{
    return(
        <div className="pt-20 flex justify-around  bg-gray-900 font-['poppins']">
            <div className="w-1/5  flex flex-col gap-4">
                <div className="flex gap-3 items-center text-blue-700">
                <IconXboxAFilled className="h-6 w-6"/>
                <div className="text-2xl font-semibold">IJobs</div>
            </div>
            <div className="text-sm text-amber-100">Job portal with user profiles,skill updates,certifications,work experience and admin job postings.</div>
            <div className="flex [&>div]:p-2 [&>div]:rounded-full gap-2 hover:[&>div]:bg-amber-50/50 [&>div]:cursor-pointer">
                <div><IconBrandFacebook/></div>
                <div><IconBrandInstagram/></div>
                <div><IconBrandX/></div>
            </div>
            </div>
            {
  footerLinks.map((item, index) => (
    <div key={index}>
      <div className="text-lg font-semibold mb-4">{item.title}</div>
      {
        item.links.map((link, index) => (
          <div key={index} className="text-sm text-amber-50 cursor-pointer hover:text-amber-300 mb-1 hover:translate-x-2 transition duration-300 ease-in-out">
            {link}
          </div>
        ))
      }
    </div>
  ))
}

        </div>

    )
}
export default Footer;