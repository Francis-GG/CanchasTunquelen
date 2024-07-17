import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import SportCard from '@/app/Components/SportCard/SportCard';
import './ReservaPage.css';

const ReservaPage = () => (
    <>
        <IonContent>
            <IonGrid className="mx-auto p-4 h-full flex justify-evenly items-center">
                <IonRow className='w-full'>
                    <IonCol size='12'>
                        <SportCard title="Padel" backgroundImage="/padel.png" />
                    </IonCol>
                    <IonCol size='12'>
                        <SportCard title="Tenis" backgroundImage="/tennis.png" />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </>
);

export default ReservaPage;