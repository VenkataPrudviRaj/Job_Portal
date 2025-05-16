import { Button, TextInput } from "@mantine/core";

const Subcribe = ()=>{
    return(
        <div className="mt-20 flex items-center mx-20 bg-slate-500 py-3 rounded-xl justify-around">
        <div className="text-4xl w-3/5  font-semibold flex items-center justify-center">
    Never want to miss any <span className="ml-2 text-blue-500">job news</span></div>
    <div className="flex gap-4 bg-blue-300 px-3 py-2">
    <TextInput className=""
      label=""
      placeholder="your@gmail.com"
    />
    <Button color="blue" variant="filled">Subscribe</Button>;
    </div>
  </div>
    )
}
export default Subcribe;