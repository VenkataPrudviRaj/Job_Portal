import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold flex items-center justify-center">
        Browse<span className="ml-2 text-blue-500">Job+</span>
        <span className="ml-2">Category</span>
      </div>
      <div className="m-auto text-lg w-1/2 text-center text-amber-100 py-1">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>
      <div className="job-carousel-wrapper relative group">
      <Carousel 
  slideSize="22%" 
  slideGap="md" loop classNames={{
    control: "carousel-control transition-opacity duration-300",
  }}
  nextControlIcon={<IconArrowRight className="h-8 w-8" />}
  previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
>
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 border border-amber-300 p-5 rounded-xl mt-10 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out shadow-amber-400">
              <div className="p-2 bg-amber-300 rounded-full">
                <img
                  className="h-10 w-10"
                  src={`/Category/${category.image}`}
                  alt={category.name}
                />
              </div>
              <div className="text-xl font-semibold mt-2">{category.name}</div>
              <div className="text-amber-100 text-center text-sm max-w-[250px] mt-1">
                {category.desc}
              </div>
              <div className="text-amber-200 text-lg mt-1">{category.jobs}+ new job posted</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default JobCategory;
