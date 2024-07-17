import React from 'react';
import { IonAvatar, IonCard, IonContent, IonItem, IonLabel, IonText } from '@ionic/react';
import './PerfilPage.css'

const PerfilPage = () => (
    <>
        <IonContent>
            <IonCard className="profile-page">
                <div className="flex justify-center items-center custom-avatar-image">
                    <IonAvatar>
                        <img src="/panda.png" alt="profile-image" />
                    </IonAvatar>
                </div>

                <IonItem lines="none" className="profile">
                    <IonLabel className="ion-text-center">
                        <IonText color="secondary">
                            Francisco
                        </IonText>
                        <p>
                            <IonText color="medium">Casa 157</IonText>
                        </p>
                    </IonLabel>
                </IonItem>
            </IonCard>
        </IonContent>
    </>
);

export default PerfilPage;