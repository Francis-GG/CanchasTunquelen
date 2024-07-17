import React from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import './HomePage.css'

import SportCard from '@/app/Components/SportCard/SportCard';

const HomePage = () => (
    <IonContent>
        <h1 className='home-page-nombre-usuario'>HOLA <span className="home-page-usuario-color">USUARIO</span></h1>
        <IonGrid className="mx-auto p-4">
            <IonRow>
                <IonCol size='6' size-md='6'>
                    <SportCard title="Padel" backgroundImage="/padel.png" />
                </IonCol>
                <IonCol size='6' size-md='6'>
                    <SportCard title="Tenis" backgroundImage="/tennis.png" />
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
    </IonContent>
);

export default HomePage;