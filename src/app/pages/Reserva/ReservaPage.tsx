import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import SportCard from '@/app/Components/SportCard/SportCard';
import './ReservaPage.css';

const ReservaPage = () => (
    <IonContent>
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#613FA0] rounded-full -translate-x-44 translate-y-1/6"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#613FA0] rounded-full translate-x-44 -translate-y-1/6"></div>
        <IonGrid className="mx-auto p-4 h-full flex justify-evenly items-center">
            <IonRow className='w-full'>
                <IonCol size='12'>
                    <SportCard className="sport-card-taller" title="Padel" backgroundImage="/padel.png" redirectTo='/main' courtType='padel' />
                </IonCol>
                <IonCol size='12'>
                    <SportCard className="sport-card-taller" title="Tenis" backgroundImage="/tennis.png" redirectTo='/main' courtType='tennis' />
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
);

export default ReservaPage;