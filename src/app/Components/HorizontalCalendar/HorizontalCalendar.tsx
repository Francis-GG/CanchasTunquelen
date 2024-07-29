import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Pagination, FreeMode]);

// Generate an array of 30 days starting from today
const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
        day: date.toLocaleDateString("es-CL", { weekday: "short" }),
        date: date.getDate(),
        fullDate: new Date(date.setHours(0, 0, 0, 0)), // Ensure time is set to 00:00:00
    };
});

type HorizontalCalendarProps = {
    selectedDay: Date;
    setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
};

const HorizontalCalendar: React.FC<HorizontalCalendarProps> = ({
    selectedDay,
    setSelectedDay,
}) => {
    // Handler for day selection
    const handleDayClick = (dayDate: Date) => {
        setSelectedDay(dayDate);
    };

    // Function to compare dates
    const isSameDate = (date1: Date, date2: Date) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    return (
        <div className="bg-gray-100 p-6">
            <Swiper spaceBetween={10} slidesPerView={5} freeMode={true}>
                {days.map((day, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`flex rounded-full mx-2 p-10 transition-all duration-300 cursor-pointer justify-evenly w-16 ${isSameDate(selectedDay, day.fullDate)
                                ? "bg-purple-600 shadow-lg"
                                : "bg-purple-400"
                                }`}
                            onClick={() => handleDayClick(day.fullDate)}
                            style={{ padding: "10px" }}
                        >
                            <div className="text-center">
                                <p
                                    className={`text-sm transition-all duration-300 ${isSameDate(selectedDay, day.fullDate)
                                        ? "text-gray-100 font-semibold"
                                        : "text-gray-900"
                                        }`}
                                >
                                    {day.day}
                                </p>
                                <p
                                    className={`text-xl transition-all duration-300 ${isSameDate(selectedDay, day.fullDate)
                                        ? "text-gray-100 font-bold"
                                        : "text-gray-900"
                                        }`}
                                >
                                    {day.date}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HorizontalCalendar;
