import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IonContent, IonButton, IonActionSheet } from '@ionic/react';
import { fireStore, auth } from '@/app/firebase/config';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';


// components
import HorizontalCalendar from '@/app/Components/HorizontalCalendar/HorizontalCalendar';
import CanchasSport from '@/app/Components/CanchasSport/CanchasSport';
import DayCalendar from '@/app/Components/DayCalendar/DayCalendar';

// types
import { Reservation } from '@/app/types';

const MainPage: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const courtType = params.get('court') || 'defaultCourtType';
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [courtNumber, setCourtNumber] = useState<number>(0);

    const [isActionSheetOpen, setIsActionSheetOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchBookings = async () => {
            const dateString = selectedDay.toISOString().split('T')[0];
            const bookingsRef = collection(fireStore, 'Reservas');
            const queryFetch = query(bookingsRef, where('courtType', '==', courtType), where('date', '==', dateString), where('courtNumber', '==', courtNumber));
            const querySnapshot = await getDocs(queryFetch);
            const bookingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Reservation));
            setReservations(bookingsData);
        };

        fetchBookings();
    }, [courtType, selectedDay, courtNumber]);

    const bookSlot = async () => {
        const user = auth.currentUser;
        if (!user) {
            console.error('Usuario no autenticado');
            return;
        }

        const dateString = selectedDay.toISOString().split('T')[0];

        try {
            const bookingsRef = collection(fireStore, 'Reservas');
            const queryBook = query(bookingsRef, where('courtType', '==', courtType), where('date', '==', dateString), where('time', '==', selectedTime), where('courtNumber', '==', courtNumber));
            const querySnapshot = await getDocs(queryBook);

            if (!querySnapshot.empty) {
                alert('Esta hora ya está reservada');
                return;
            }

            await addDoc(collection(fireStore, 'Reservas'), {
                courtType,
                courtNumber: courtNumber,
                date: dateString,
                time: selectedTime,
                userId: user.uid,
                userName: user.displayName,
                userProfileImage: user.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg',
            });

            alert('Reserva confirmada');
            setSelectedTime(null);

        } catch (error) {
            console.error('Error al intentar reservar:', error);
            alert('Error al intentar reservar.')
        }
    }

    // Logic to fetch and display available spots for the specified court type
    return (
        <IonContent>
            <CanchasSport sport={courtType} courtNumber={courtNumber} setCourtNumber={setCourtNumber} />
            <HorizontalCalendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <DayCalendar reservations={reservations} selectedTime={selectedTime} onTimeSelect={(time) => setSelectedTime(time)} />
            <IonButton
                className='mx-auto px-10'
                expand='block'
                id='open-action-sheet'
                onClick={() => setIsActionSheetOpen(true)}
                disabled={!selectedTime}
            >
                Reservar
            </IonButton>
            <IonActionSheet

                isOpen={isActionSheetOpen}
                onDidDismiss={() => setIsActionSheetOpen(false)}
                header="Desea confirmar la reserva?"
                buttons={[
                    {
                        text: 'Confirmar Reserva',
                        role: 'destructive',
                        handler: () => {
                            bookSlot();
                        },
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            setIsActionSheetOpen(false);
                        }
                    },
                ]}
            ></IonActionSheet>
        </IonContent>
    );
};

export default MainPage;