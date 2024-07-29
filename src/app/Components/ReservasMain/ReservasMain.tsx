import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/react";
import { Pagination } from "swiper/modules";
import { Reservation } from "@/app/types";
import { deleteUserReservation } from "@/app/firebase/services/firestoreService";

import 'swiper/css';
import 'swiper/css/pagination';

import sportTranslations from "@/app/utils/sportTranslations";

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
        <IonCard className="custom-card" id='next-match'>
            <IonCardHeader>
                <IonCardTitle>Tus Próximas Reservas</IonCardTitle>
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
                                <IonCard className="reservation-card flex flex-col items-start justify-center p-2">
                                    <IonCardHeader>
                                        <IonCardTitle>
                                            {sportTranslations[reservation.courtType.toLowerCase()] || reservation.courtType.toUpperCase()}
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <div className="reservation-details">
                                        <p><strong>Fecha: {reservation.date}</strong></p>
                                        <p><strong>Hora: {reservation.time}</strong></p>
                                        <p><strong>Número de Cancha:</strong> {reservation.courtNumber + 1}</p>
                                    </div>
                                    <IonButton
                                        color="danger"
                                        onClick={() => handleDeleteReservation(reservation.id)}
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
        </IonCard>
    );
};

export default ReservasMain;

