import React from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import './HomePage.css'

const HomePage = () => (
    <>

        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard className="custom-card">
                            <IonCardHeader>
                                <IonCardTitle>Tenis</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {"Here's a small text description for the card content. Nothing more, nothing less."}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard className="custom-card">
                            <IonCardHeader>
                                <IonCardTitle>Tenis</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {"Here's a small text description for the card content. Nothing more, nothing less."}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonCard className="custom-card">
                <IonCardHeader>
                    <IonCardTitle>Tu Proxima Reserva</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {"Here's a small text description for the card content. Nothing more, nothing less."}
                </IonCardContent>
            </IonCard>
        </IonContent>
    </>
);

export default HomePage;