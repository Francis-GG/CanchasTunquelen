import React from 'react';
import { useLocation } from 'react-router-dom';
import { IonContent, IonButton, IonActionSheet } from '@ionic/react';

// components
import HorizontalCalendar from '@/app/Components/HorizontalCalendar/HorizontalCalendar';
import CanchasSport from '@/app/Components/CanchasSport/CanchasSport';
import DayCalendar from '@/app/Components/DayCalendar/DayCalendar';
import HorarioCanchas from '@/app/Components/HorarioCanchas/HorarioCanchas';

const MainPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const courtType = params.get('court') || 'defaultCourtType';


    // Logic to fetch and display available spots for the specified court type
    return (
        <IonContent>
            <CanchasSport sport={courtType} />
            <HorizontalCalendar />
            <DayCalendar />
            <IonButton className='mx-auto mt-10 p-10' expand='block' id='open-action-sheet'>Reservar</IonButton>
            <IonActionSheet
                trigger="open-action-sheet"
                header="Desea confirmar la reserva?"
                buttons={[
                    {
                        text: 'Confirmar Reserva',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        data: {
                            action: 'cancel',
                        },
                    },
                ]}
            ></IonActionSheet>
        </IonContent>
    );
};

export default MainPage;