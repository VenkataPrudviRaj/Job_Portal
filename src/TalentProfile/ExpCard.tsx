const ExpCard = (props:any)=>{
    return(
        <div>
            <div className="flex justify-between py-2 ">
                <div className="flex items-center gap-2" >
                        <div className="bg-indigo-200 p-2 ">
                            <img className = "h-8 " src={`/Icon/${props.company}.png`} alt="google"/>
                        </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm">{props.company} &bull; {props.location}</div>
                    </div>

                </div>
                <div className="text-sm">
                    {props.startDate} - {props.endDate}
                </div>
            </div>
            <div className="text-sm text-justify">
                {props.description}
            </div>
        </div>
    )
}
export default ExpCard;