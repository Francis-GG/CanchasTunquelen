import React, { useEffect, useState } from 'react';
import { IonGrid, IonCol, IonRow, useIonViewWillEnter } from '@ionic/react';
import { getAuth } from 'firebase/auth';
import { getUserData, getUserReservations } from '@/app/firebase/services/firestoreService';
import { Reservation } from '@/app/types';
import './HomePage.css'

import SportCard from '@/app/Components/SportCard/SportCard';
import ReservasMain from '@/app/Components/ReservasMain/ReservasMain';


const HomePage = () => {

    const [userName, setUserName] = useState('');
    const [nextReservations, setNextReservations] = useState<Reservation[]>([]);

    useIonViewWillEnter(() => {
        console.log('HomePage useEffect');
        const fetchUserData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                try {
                    const userData = await getUserData(user.uid);
                    if (userData) {
                        setUserName(userData.name);
                    }

                    const reservations = await getUserReservations(user.uid);
                    setNextReservations(reservations as Reservation[]);
                } catch (error) {
                    console.error('Error fetching user data: ', error)
                }
            }
        };

        fetchUserData();
    });

    return (
        <>
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#613FA0] rounded-full translate-x-1/2 translate-y-1/4 z-0"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#613FA0] rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>
            <h1 className='home-page-nombre-usuario z-10'>HOLA <span className="home-page-usuario-color">{userName || 'USUARIO'} </span></h1>
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
                        <ReservasMain nextReservations={nextReservations} setNextReservations={setNextReservations} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default HomePage;