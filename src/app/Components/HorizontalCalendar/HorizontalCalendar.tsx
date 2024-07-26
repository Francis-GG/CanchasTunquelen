import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonContent, IonText, IonChip, IonItem } from '@ionic/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { FreeMode, Pagination } from 'swiper/modules';
SwiperCore.use([Pagination, FreeMode]);

const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
        day: date.toLocaleDateString('es-CL', { weekday: 'short' }),
        date: date.getDate(),
        fullDate: new Date(date),
    };
});

type HorizontalCalendarProps = {
    selectedDay: Date;
    setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
};

const HorizontalCalendar: React.FC<HorizontalCalendarProps> = ({ selectedDay, setSelectedDay }) => {
    const handleDayClick = (dayDate: Date) => {
        setSelectedDay(dayDate);

    };

    return (
        <div className="bg-gray-100 p-6">
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                freeMode={true}


            >
                {days.map((day, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`flex rounded-full mx-1 transition-all duration-300 cursor-pointer justify-center w-16 ${selectedDay === day.fullDate ? 'bg-purple-600 shadow-lg' : 'bg-purple-400'
                                }`}
                            onClick={() => handleDayClick(day.fullDate)}
                            style={{ padding: '10px' }}
                        >
                            <div className="text-center">
                                <p className={`text-sm transition-all duration-300 ${selectedDay === day.fullDate ? 'text-gray-100 font-semibold' : 'text-gray-900'}`}>
                                    {day.day}
                                </p>
                                <p className={`text-xl transition-all duration-300 ${selectedDay === day.fullDate ? 'text-gray-100 font-bold' : 'text-gray-900'}`}>
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
