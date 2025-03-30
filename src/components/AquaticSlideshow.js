// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function AquaticSlideshow() {
    return (
        <Swiper modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="max-w-[400px] rounded-lg shadow-lg">
            
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/projects/aquatic-top.jpg" 
                        alt="The FlyderBot Project Team" 
                        className="size-full max-h-[500px] object-cover" 
                    />
                    <p className="w-full bg-white px-2 pb-6 pt-2 text-center text-black">
                        TODO: Aquatic Housekeeper top view.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/projects/aquatic-bottom.jpg" 
                        alt="The FlyderBot Project Team" 
                        className="size-full max-h-[500px] object-cover" 
                    />
                    <p className="w-full bg-white px-2 pb-6 pt-2 text-center text-black">
                        TODO: Aquatic Housekeeper bottom view.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/projects/aquatic-open.jpg" 
                        alt="The FlyderBot Project Team" 
                        className="size-full max-h-[500px] object-cover" 
                    />
                    <p className="w-full bg-white px-2 pb-6 pt-2 text-center text-black">
                        TODO: Aquatic Housekeeper open view.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
