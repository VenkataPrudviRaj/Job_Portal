import { companyData } from "../Data/Company";

const AboutComp = ()=>{
    const company : {[key:string]:any} = companyData;
    return(
        <div>
            {
                Object.keys(company).map((key,index)=><div key={index}>
                    <div className="">{key}</div>
                    <div>{company[key]}</div>
                 </div> )
            }
        </div>
    )
}
export default AboutComp;