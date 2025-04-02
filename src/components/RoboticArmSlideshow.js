// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function RoboticArmSlideshow() {
    return (
        <Swiper modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="max-w-[600px] rounded-lg shadow-lg">
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <video 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                        className="size-full max-h-[500px] object-cover"
                    >
                        <source src="/projects/robotic-arm-imitation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="w-full bg-white px-2 pb-6 pt-2 text-center text-black">
                        In this video, we demonstrate the imitation functionality of the 
                        robotic arm. The operator has 2 IMU sensors attached to their arm and hand, 
                        when they move their hand, the robot mimics their movement. While the current 
                        implementation has some issues with jitter, this functionality 
                        provides a way to remotely actuate the robot.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <video 
                        controls 
                        loop 
                        muted 
                        className="size-full max-h-[500px] object-cover"
                    >
                        <source src="/projects/robotic-arm-movement.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="w-full bg-white px-2 pb-6 pt-2 text-center text-black">
                        This video demonstrates the 3 degrees of freedom of the robotic arm 
                        as well as the functionality of the gripper claw using a pre-written 
                        script.
                    </p>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
}
