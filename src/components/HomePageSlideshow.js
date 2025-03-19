// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function HomePageSlideshow() {
    return (
        <Swiper modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="rounded-lg shadow-lg max-w-[400px]">
            
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/personal_photos/queenstown-photo.jpeg" 
                        alt="Jacob in Queenstown NZ" 
                        className="w-full h-full max-h-[300px] object-cover" 
                    />
                    <p className="bg-white text-black text-center w-full pt-2 pb-6 px-2">
                        I spent 3 months in the summer of 2024 exploring the south island of New Zealand. 
                        This photo is overlooking Queenstown from the top of the Ben Lomond Hike.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img 
                        src="/personal_photos/shasta-photo.jpeg" 
                        alt="Jacob ski touring Mount Shasta" 
                        className="w-full h-full max-h-[300px] object-cover" 
                    />
                    <p className="bg-white text-black text-center w-full pt-2 pb-6 px-2">
                        Although I&#39;ve been alpine skiing for my whole life, I started ski touring last spring. 
                        This photo is from an overnight trip to Mt Shasta in May of 2024.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
