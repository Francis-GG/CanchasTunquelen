import React from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonText, IonIcon } from '@ionic/react';
import { lockClosedOutline, logOutOutline, trashOutline } from 'ionicons/icons';
import './PerfilPage.css';

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
                        <IonText>
                            Francisco González
                        </IonText>
                        <p>
                            <IonText id="house-number">Casa 157</IonText>
                        </p>
                        <p className="status">
                            <IonText>Estado:</IonText>
                            <IonText id="status-text"> activo</IonText>
                        </p>
                    </IonLabel>
                </IonItem>

                <div className="button-group animate-fade-in-up">
                    <IonButton className="custom-button change-password-button" expand="block">
                        <IonIcon slot="start" icon={lockClosedOutline} />
                        Cambiar Contraseña
                    </IonButton>
                    <IonButton className="custom-button logout-button" expand="block">
                        <IonIcon slot="start" icon={logOutOutline} />
                        Cerrar Sesión
                    </IonButton>
                    <IonButton className="custom-button delete-account-button" expand="block" color="danger">
                        <IonIcon slot="start" icon={trashOutline} />
                        Eliminar Cuenta
                    </IonButton>
                </div>
            </IonCard>
        </IonContent>
    </>
);

export default PerfilPage;
