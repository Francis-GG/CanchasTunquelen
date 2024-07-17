import React from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import './HomePage.css'

const HomePage = () => (
    <>
        <IonContent>
            <h1 className='nombre-usuario'>HOLA <span className="usuario-color">USUARIO</span></h1>
            <IonGrid className="mx-auto p-4">
                <IonRow>
                    <IonCol size='6' size-md='6'>
                        <IonCard className="custom-card small-card" id='padel-card'>
                            <IonCardHeader>
                                <IonCardTitle className='font-bold'>Padel</IonCardTitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                    <IonCol size='6' size-md='6'>
                        <IonCard className="custom-card" id='tennis-card'>
                            <IonCardHeader>
                                <IonCardTitle className='font-bold'>Tenis</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
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

    </>
);

export default HomePage;