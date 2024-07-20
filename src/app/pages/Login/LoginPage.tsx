import React from 'react';
import { IonContent, IonIcon, IonCard, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/react';
import './LoginPage.css'
import { lockClosed, mail } from 'ionicons/icons';


const LoginPage = () => (

    <IonContent>
        <div id='header'>
            <div id='app-bar'>
                <div id='logo'>
                    <img src="logo-canchas.svg" alt="logo-canchas" />
                </div>
            </div>
            <h1>Bienvenido de vuelta</h1>
        </div>
        <div className='wrapper'>
            <IonCard className='form-wrapper'>
                <IonCardContent>
                    <IonItem>
                        <IonIcon icon={mail} slot='start'></IonIcon>
                        <IonInput type='text' placeholder='Email'></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={lockClosed} slot='start' ></IonIcon>
                        <IonInput type='password' placeholder='Contraseña'></IonInput>
                    </IonItem>
                    <IonButton expand='block'>Iniciar Sesión</IonButton>
                </IonCardContent>
            </IonCard>
        </div>
    </IonContent>
);

export default LoginPage;