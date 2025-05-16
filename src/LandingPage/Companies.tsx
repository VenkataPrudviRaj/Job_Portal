import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = ()=>{
    return(
        <div className="mt-1 pb-5 ">
            <div className="text-4xl font-semibold flex items-center justify-center">Trusted By <span className="ml-2 text-blue-500">1000+</span>  <span className="ml-2">Companies</span></div>
            <Marquee pauseOnHover={true}>
                {
                    companies.map((company,index)=><div key={index} className="mx-8 px-2 py-2 hover:bg-black/40 rounded-xl cursor-pointer">
                        <img className="h-14 " src={`/Companies/${company}.png`} alt={company}/>
                    </div>)
                }
                
            </Marquee>
        </div>
    )
}
export default Companies;