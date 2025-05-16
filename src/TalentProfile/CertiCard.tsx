const CertiCard = (props:any) =>{
    return(
        <div className="py-3">
            <div className="flex justify-between">
            <div className="flex items-center gap-2" >
                        <div className="bg-indigo-200 p-2 ">
                            <img className = "h-8 " src={`/Icon/${props.issuer}.png`} alt="google"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">{props.name}</div>   
                            <div className="text-sm">{props.issuer}</div>                     
                        </div>
                         
             </div>
             <div className="flex flex-col items-end">
                    <div className="text-sm"> {props.issueDate}</div>
                    <div className="text-sm">{props.certificateId}</div>
            </div>   

            </div>
            
        </div>       
    )
}
export default CertiCard;