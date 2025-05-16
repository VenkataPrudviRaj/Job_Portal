import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = ()=>{
    const [Preview,setPreview] = useState(false);
    const [Submit,setSubmit] = useState(false);
    const [sec,setSec] = useState(5);
    const navigate = useNavigate();
    
    const handlesetPreview = ()=>{
        setPreview(!Preview),
        window.scrollTo({top:0,behavior:"smooth"})
    }
    const handlesetSubmit = ()=>{
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if(x == 0) navigate('/Find-Jobs');
        }, 1000);
    }

    return(
        <>
        <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={Submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'cyan', type: 'bars' }}
        />
           <div className=" mt-2 flex p-3  justify-between ">
                <div className="flex gap-2 items-center ">
                    <div className="w-21 h-21 p-2 rounded-lg bg-amber-50/20" >                      
                        <img src={`/Icon/Google.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-semibold text-2xl text-amber-50">Software Engineer 111</div>
                        <div className="text-lg">Google &#x2022; 3 days ago &#x2022;  48 Applicants</div>
                    </div>
                </div>
            </div>
            <Divider my="xl"/>
            <div className="font-semibold text-xl mb-5">Submit Your Application</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput label="FullName" withAsterisk placeholder="Enter FullName" readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview ? "text-amber-50 font-semibold" : ""}`}
/>
                    <TextInput label="Email" withAsterisk placeholder="Enter Email" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput label="PhoneNumber" withAsterisk placeholder="Enter PhoneNumber" hideControls min={0} max={9999999999} clampBehavior="strict"/>
                    <TextInput label="Personnal website" withAsterisk placeholder="Enter URL" />
                </div>
                 <FileInput withAsterisk
                    leftSection={<IconPaperclip/>} label="Attach your CV"
                    placeholder="Your CV" leftSectionPointerEvents="none"/>
                 <Textarea withAsterisk
                    placeholder="Enter Something About Yourself...."
                    label="Cover Letter"
                    autosize minRows={4} /> 
                 {!Preview &&<Button onClick={handlesetPreview} variant="light" >Preview</Button>}    
                 {
                   Preview && <div  className="flex gap-10 [&>*]:w-1/2">
                        <Button variant="outline" onClick={handlesetPreview} fullWidth>Edit</Button>
                        <Button variant="light" onClick={handlesetSubmit} fullWidth>Submit</Button>
                    </div>
                 }  
            </div>
        </div>
        <Notification
  className={`!border-blue-500 !fixed top-0 left-[30%] transition duration-300 z-[1001] ease-in-out ${Submit ? "translate-y-0" : "-translate-y-20"}`}
  icon={<IconCheck size={20} />}
  withBorder
  color="teal"
  title="Application Submitted"
>
  Redirecting to Find Jobs in {sec} sec ......
</Notification>

      </>  
    )
}
export default ApplyJobComp;