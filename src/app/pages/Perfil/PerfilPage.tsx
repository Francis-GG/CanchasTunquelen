import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonText, IonIcon, IonPage } from '@ionic/react';
import { lockClosedOutline, logOutOutline, trashOutline } from 'ionicons/icons';
import { getUserData } from '@/app/firebase/services/firestoreService';
import { logout, DeleteUser } from '@/app/firebase/services/authservice';
import { useHistory } from 'react-router-dom';
import { auth } from '@/app/firebase/config';
import './PerfilPage.css';

const PerfilPage = () => {

    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userHouseNumber, setUserHouseNumber] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if (user) {
                try {
                    const userData = await getUserData(user.uid);
                    if (userData) {
                        setUserName(userData.name);
                        setUserLastName(userData.lastName);
                        setUserHouseNumber(userData.houseNumber);
                    }
                } catch (error) {
                    console.error('Error fetching user data: ', error)
                }
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            history.push('/welcome');
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await DeleteUser(auth.currentUser!);
            history.push('/welcome');
        } catch (error) {
            console.error('Error deleting user: ', error);
        }
    };


    return (
        <IonContent>
            <IonCard className="profile-page">
                <div className="flex justify-center items-center custom-avatar-image">
                    <IonAvatar>
                        <img src="/panda.png" alt="profile-image" />
                    </IonAvatar>
                </div>

                <IonItem lines="none" className="profile">
                    <IonLabel className="ion-text-center">
                        <IonText className="user-name">
                            {userName} {userLastName}
                        </IonText>
                        <p>
                            <IonText id="house-number">Casa {userHouseNumber}</IonText>
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
                    <IonButton className="custom-button logout-button" expand="block" onClick={handleLogout}>
                        <IonIcon slot="start" icon={logOutOutline} />
                        Cerrar Sesión
                    </IonButton>
                    <IonButton className="custom-button delete-account-button" expand="block" color="danger" onClick={handleDeleteAccount}>
                        <IonIcon slot="start" icon={trashOutline} />
                        Eliminar Cuenta
                    </IonButton>
                </div>
            </IonCard>
        </IonContent>
    );
};

export default PerfilPage;
