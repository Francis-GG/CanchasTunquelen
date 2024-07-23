import React from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import './HomePage.css'

import SportCard from '@/app/Components/SportCard/SportCard';


const HomePage = () => (
    <>
        <h1 className='home-page-nombre-usuario'>HOLA <span className="home-page-usuario-color">USUARIO</span></h1>
        <IonGrid className="p-4 w-full">
            <IonRow>
                <IonCol size='6' size-md='6'>
                    <SportCard title="Padel" backgroundImage="/padel.png" redirectTo='/main' courtType='padel' />
                </IonCol>
                <IonCol size='6' size-md='6'>
                    <SportCard title="Tenis" backgroundImage="/tennis.png" redirectTo='/main' courtType='tennis' />
                </IonCol>
            </IonRow>

            <IonRow className="mt-4">
                <IonCol size="12">
                    <IonCard className="custom-card" id='next-match'>
                        <IonCardHeader>
                            <IonCardTitle>Tu Proxima Reserva</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {"nada"}
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </>
);

export default HomePage;