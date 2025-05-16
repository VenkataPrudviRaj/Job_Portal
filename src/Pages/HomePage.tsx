import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import Dreamjob from "../LandingPage/Dreamjob";
import Footer from "../LandingPage/Footer";
import JobCategory from "../LandingPage/JobCategory";
import Subcribe from "../LandingPage/Subcribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const Homepage = () => {
    return (
        <div className= "min-h-[100vh] bg-gray-900 font-['poppins']">
            
            <Dreamjob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subcribe/>
            
        </div>
    )
}
export default Homepage;
