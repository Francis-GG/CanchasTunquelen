import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from "@ionic/react";
import { Pagination } from "swiper/modules";
import { Reservation } from "@/app/types";
import { deleteUserReservation } from "@/app/firebase/services/firestoreService";

import 'swiper/css';
import 'swiper/css/pagination';

import sportTranslations from "@/app/utils/sportTranslations";

import { timeOutline, calendarOutline, locationOutline } from "ionicons/icons";

interface ReservasMainProps {
    nextReservations: Reservation[];
    setNextReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
}

const ReservasMain: React.FC<ReservasMainProps> = ({ nextReservations, setNextReservations }) => {

    const handleDeleteReservation = async (reservationId: string) => {
        console.log("Deleting reservation ahora en handle: ", reservationId);
        try {
            // Delete the reservation from Firestore
            await deleteUserReservation(reservationId);

            // Remove the reservation from local state
            setNextReservations((prevReservations) =>
                prevReservations.filter((res) => res.id !== reservationId)
            );
        } catch (error) {
            console.error("Error deleting reservation: ", error);
            alert("Error deleting reservation.");
        }
    };

    return (
        <IonCard className="custom-card">
            <IonCardHeader className="pb-1">
                <IonCardTitle className="text-center">Reservas activas</IonCardTitle>
            </IonCardHeader>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className='h-full flex flex-col justify-between'
            >
                {
                    nextReservations.length > 0 ? (
                        nextReservations.map((reservation, index) => (
                            <SwiperSlide key={index}>
                                <IonCard color={"#dbe1ff"} className="flex flex-col items-center justify-evenly p-4 shadow-none text-black">
                                    <IonCardHeader className="w-full text-center py-0 text-xl">
                                        <IonCardTitle className="text-2xl">
                                            {sportTranslations[reservation.courtType.toLowerCase()] || reservation.courtType.toUpperCase()}
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <div className="reservation-details flex justify-around w-full mt-4">
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                                <IonIcon className="text-2xl" icon={timeOutline} />
                                            </div>
                                            <p className="mt-2">Hora:</p>
                                            <p>{reservation.time}</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                                <IonIcon className="text-2xl" icon={locationOutline} />
                                            </div>
                                            <p className="mt-2">Cancha:</p>
                                            <p>{reservation.courtNumber + 1}</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                                <IonIcon className="text-2xl" icon={calendarOutline} />
                                            </div>
                                            <p className="mt-2">Fecha:</p>
                                            <p>{new Date(reservation.date).toLocaleDateString('es-CL', { day: 'numeric', month: 'long' })}</p>
                                        </div>
                                    </div>
                                    <IonButton
                                        color="danger"
                                        onClick={() => handleDeleteReservation(reservation.id)}
                                        className="flex justify-center w-full mt-4 px-8"
                                    >
                                        Cancelar Reserva
                                    </IonButton>
                                </IonCard>
                            </SwiperSlide>
                        ))
                    ) : (
                        <IonCardContent className="flex items-center justify-center h-full text-center">
                            <p>No tienes reservas próximas.</p>
                        </IonCardContent>
                    )
                }
            </Swiper>
        </IonCard >
    );
};

export default ReservasMain;