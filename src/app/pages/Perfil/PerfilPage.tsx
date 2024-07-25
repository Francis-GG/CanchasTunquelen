import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonContent, IonItem, IonLabel, IonText, IonIcon } from '@ionic/react';
import { lockClosedOutline, logOutOutline, trashOutline } from 'ionicons/icons';
import { getUserData } from '@/app/firebase/services/firestoreService';
import { logout, DeleteUser } from '@/app/firebase/services/authservice';
import { useHistory } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, fireStore } from '@/app/firebase/config';

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
            await deleteDoc(doc(fireStore, 'Usuarios', auth.currentUser!.uid));
            await DeleteUser(auth.currentUser!);
            history.push('/welcome');
        } catch (error) {
            console.error('Error deleting user: ', error);
        }
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#613FA0] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#613FA0] rounded-full translate-x-1/2 translate-y-1/2"></div>

            <IonCard className="bg-white rounded-[25px] pb-[16vh] max-w-md shadow-lg z-10 border-2 border-gray-100">
                <div className="flex justify-center items-center transform translate-y-[5vh] mb-[6vh]">
                    <IonAvatar className="w-[25vh] h-[25vh] border-4 border-custom-purple p-[0.8vh]">
                        <img src="/panda.png" alt="profile-image" className="w-full h-full object-cover" />
                    </IonAvatar>
                </div>

                <IonItem lines="none" className="flex flex-col items-center justify-center bg-transparent py-4">
                    <IonLabel className="text-center font-semibold">
                        <IonText className="text-black text-lg">
                            {userName} {userLastName}
                        </IonText>
                        <p className="text-xs font-bold mt-2 text-black">
                            <IonText>Casa {userHouseNumber}</IonText>
                        </p>
                        <p className="text-xs font-bold mt-4">
                            <IonText>Estado:</IonText>
                            <IonText className="text-[#009a29]"> activo</IonText>
                        </p>
                    </IonLabel>
                </IonItem>

                <div className="flex flex-col items-center mt-5 space-y-3 animate-fade-in-up">
                    <IonButton className="w-4/5 text-white hover:bg-[#512e80] transition-colors" expand="block" color='button-color'>
                        <IonIcon slot="start" icon={lockClosedOutline} />
                        Cambiar Contraseña
                    </IonButton>
                    <IonButton className="w-4/5 text-white hover:bg-[#512e80] transition-colors" expand="block" color='button-color' onClick={handleLogout}>
                        <IonIcon slot="start" icon={logOutOutline} />
                        Cerrar Sesión
                    </IonButton>
                    <IonButton className="w-4/5 text-white hover:bg-red-700 transition-colors" expand="block" color="danger" onClick={handleDeleteAccount}>
                        <IonIcon slot="start" icon={trashOutline} />
                        Eliminar Cuenta
                    </IonButton>
                </div>
            </IonCard>
        </>
    );
};

export default PerfilPage;