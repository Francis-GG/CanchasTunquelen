import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonChip } from '@ionic/react';

interface CanchasSportProps {
    sport: string;
    courtNumber: number;
    setCourtNumber: React.Dispatch<React.SetStateAction<number>>;
}

function CanchasSport({ sport, courtNumber, setCourtNumber }: CanchasSportProps) {

    const handleCourtClick = (index: number) => {
        setCourtNumber(index);
    }

    let canchas: string[] = [];

    if (sport === 'padel') {
        canchas = ['cancha 1'];
    } else if (sport === 'tennis') {
        canchas = ['cancha 1', 'cancha 2', 'cancha 3'];
    }

    return (
        <IonGrid className='mx-auto p-4'>
            <IonRow className='justify-center'>
                {canchas.map((cancha, index) => (
                    <IonCol size='4' key={index} className='flex justify-center items-center'>
                        <IonChip onClick={() => handleCourtClick(index)} className={`text-base transition-all duration-300 ${courtNumber === index ? 'text-gray-100 font-bold bg-purple-600 shadow-lg' : 'text-gray-900'}`} color="secondary">{cancha}</IonChip>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default CanchasSport;