import React from "react";
import { IonContent, IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";

const DayCalendar = () => {
    // Generate an array of time slots from 09:00 to 21:00
    const horarios = Array.from({ length: 13 }, (_, index) => {
        const hora = 9 + index; // Start at 9
        return `${hora.toString().padStart(2, '0')}:00`; // Format HH:00
    });

    return (
        <div className="overflow-y-auto max-h-[46vh] pt-4">
            <IonList inset={true}>
                {horarios.map((horario, index) => (
                    <IonItem button={true} className="flex items-center" key={index}>
                        <IonLabel className="flex-none w-1/7">{horario}</IonLabel>
                        <div className="border-r border-gray-300 h-full mx-3"></div>
                        <IonAvatar className="mr-4">
                            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonLabel>Nombre Normal</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </div>

    );
}

export default DayCalendar;
