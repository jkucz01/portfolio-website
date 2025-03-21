// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function FlyderbotSlideshow() {
    return (
        <Swiper modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="rounded-lg shadow-lg max-w-[400px]">
            
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <video 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-full object-cover max-h-[500px]"
                    >
                        <source src="/projects/flyderbot-full-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="bg-white text-black text-center w-full pt-2 pb-6 px-2">
                        This is a video of our final demo for this project. First the robot drives to 
                        the wall, transitions onto the wall, and drives up. When the robot encounters 
                        an obstacle, it the drives down, and transitions back onto the ground. 
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/projects/flyderbot-team.jpg" 
                        alt="The FlyderBot Project Team" 
                        className="w-full h-full max-h-[500px] object-cover" 
                    />
                    <p className="bg-white text-black text-center w-full pt-2 pb-6 px-2">
                        A photo of the project team members. 
                        Left: Izabel Wu, Center: Henry Nguyen, Right: Jacob Kuczynski (myself).
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
