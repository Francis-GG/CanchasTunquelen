import React from "react";
import { IonContent, IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";

// types
import { Reservation } from '@/app/types';


type DayCalendarProps = {
    reservations: Reservation[];
    selectedTime: string | null;
    onTimeSelect: (time: string) => void;
}

const DayCalendar: React.FC<DayCalendarProps> = ({ reservations, selectedTime, onTimeSelect }) => {
    // Generate an array of time slots from 09:00 to 21:00
    const horarios = Array.from({ length: 13 }, (_, index) => {
        const hora = 9 + index; // Start at 9
        return `${hora.toString().padStart(2, '0')}:00`; // Format HH:00
    });

    const handleTimeClick = (time: string) => {
        console.log('Selected time:', time);
        onTimeSelect(time);
    }


    return (
        <div className="overflow-y-auto max-h-[46vh] my-4">
            <IonList inset={false} lines="inset" >
                {horarios.map((horario, index) => {
                    const reservation = reservations.find((b: Reservation) => b.time === horario);
                    const isReserved = Boolean(reservation);
                    const isSelected = selectedTime === horario;

                    return (


                        <IonItem
                            button={!isReserved}
                            className={` ${isReserved ? '' : isSelected ? 'ion-item-selected' : ''}`}
                            lines={isReserved ? 'none' : isSelected ? 'none' : 'inset'}
                            key={index}
                            onClick={() => {
                                if (!isReserved) {
                                    onTimeSelect(horario);
                                }
                            }}
                            color={isReserved ? 'custom-gray' : isSelected ? 'light-purple' : 'light'}
                        >
                            <IonLabel className="flex-none w-1/7">{horario}</IonLabel>
                            <div className="border-r border-gray-300 h-full mx-3"></div>
                            <IonAvatar className="mr-4" >
                                <img className="w-full h-full object-cover" alt={isReserved ? reservation!.userName : ''} src={isReserved ? reservation!.userProfileImage : 'https://ionicframework.com/docs/img/demos/avatar.svg'} />
                            </IonAvatar>
                            <IonLabel>{isReserved ? reservation!.userName : isSelected ? 'Seleccionado' : 'Disponible'}</IonLabel>
                        </IonItem>
                    );
                })}
            </IonList>
        </div>

    );
}

export default DayCalendar;
