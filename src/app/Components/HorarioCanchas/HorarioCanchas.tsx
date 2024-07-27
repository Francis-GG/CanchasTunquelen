import React, { useState } from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonChip } from '@ionic/react';

const HorarioCanchas = () => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Generate an array of time slots from 09:00 to 21:00
    const horarios = Array.from({ length: 13 }, (_, index) => {
        const hora = 9 + index; // Start at 9
        return `${hora.toString().padStart(2, '0')}:00`; // Format HH:00
    });

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <IonGrid>
            <IonRow>
                <IonCol className="flex justify-center p-4 text-lg">
                    <h1>Horario Canchas</h1>
                </IonCol>
            </IonRow>
            <IonRow>
                {horarios.map((horario, index) => (
                    <IonCol key={index} size="4" className="flex justify-center">
                        <IonChip
                            color="secondary"
                            onClick={() => handleTimeClick(horario)}
                            className={`text-lg cursor-pointer transition-all duration-300 ${selectedTime === horario ? 'bg-purple-600 text-white' : 'secondary'}`}
                        >
                            {horario}
                        </IonChip>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default HorarioCanchas;
