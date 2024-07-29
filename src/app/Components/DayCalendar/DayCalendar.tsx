import React from "react";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";

// types
import { Reservation } from '@/app/types';

type DayCalendarProps = {
    reservations: Reservation[];
    selectedTime: string | null;
    onTimeSelect: (time: string) => void;
    selectedDay: Date;  // Add selectedDay as a prop
}

const DayCalendar: React.FC<DayCalendarProps> = ({ reservations, selectedTime, onTimeSelect, selectedDay }) => {
    // Generate an array of time slots from 09:00 to 21:00
    const horarios = Array.from({ length: 13 }, (_, index) => {
        const hora = 9 + index; // Start at 9
        return `${hora.toString().padStart(2, '0')}:00`; // Format HH:00
    });

    // Get the current date and time
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    const handleTimeClick = (time: string) => {
        console.log('Selected time:', time);
        onTimeSelect(time);
    };

    return (
        <div className="overflow-y-auto max-h-[46vh] pt-4">
            <IonList inset={true}>
                {horarios.map((horario, index) => {
                    const reservation = reservations.find((b: Reservation) => b.time === horario);
                    const isReserved = Boolean(reservation);
                    const isSelected = selectedTime === horario;

                    // Parse the hour from the time slot
                    const slotHour = parseInt(horario.split(':')[0], 10);

                    // Check if the selected day is today and if the slot has passed
                    const isPastTimeSlot = selectedDay.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0) && slotHour <= currentHour;

                    return (
                        <IonItem
                            button={!isReserved && !isPastTimeSlot} // Disable the button if it's reserved or a past time slot
                            className={`${isReserved ? '' : isSelected ? 'ion-item-selected' : ''}`}
                            lines={isReserved ? 'none' : isSelected ? 'none' : 'inset'}
                            key={index}
                            onClick={() => {
                                if (!isReserved && !isPastTimeSlot) { // Ensure not to allow selection of past time slots
                                    handleTimeClick(horario);
                                }
                            }}
                            color={isReserved || isPastTimeSlot ? 'custom-gray' : isSelected ? 'light-purple' : 'light'}
                        >
                            <IonLabel className="flex-none w-1/7">{horario}</IonLabel>
                            <div className="border-r border-gray-300 h-full mx-3"></div>
                            <IonAvatar className="mr-4">
                                <img
                                    alt={isReserved ? reservation!.userName : 'Default Avatar'}
                                    src={isReserved ? reservation!.userProfileImage : 'https://ionicframework.com/docs/img/demos/avatar.svg'}
                                />
                            </IonAvatar>
                            <IonLabel>
                                {isReserved ? reservation!.userName : isSelected ? 'Seleccionado' : isPastTimeSlot ? 'No Disponible' : 'Disponible'}
                            </IonLabel>
                        </IonItem>
                    );
                })}
            </IonList>
        </div>
    );
};

export default DayCalendar;
