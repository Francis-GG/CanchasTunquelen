import React from 'react';
import { useLocation } from 'react-router-dom';
import { IonContent } from '@ionic/react';
import HorizontalCalendar from '@/app/Components/HorizontalCalendar/HorizontalCalendar';
import CanchasSport from '@/app/Components/CanchasSport/CanchasSport';

const MainPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const courtType = params.get('court') || 'defaultCourtType';


    // Logic to fetch and display available spots for the specified court type
    return (
        <IonContent>
            <CanchasSport sport={courtType} />
        </IonContent>
    );
};

export default MainPage;