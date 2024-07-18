import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonChip } from '@ionic/react';

interface CanchasSportProps {
    sport: string;
}

function CanchasSport({ sport }: CanchasSportProps) {

    const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

    const handleCourtClick = (index: number) => {
        setSelectedCourt(index);
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
                        <IonChip onClick={() => handleCourtClick(index)} className={`text-base transition-all duration-300 ${selectedCourt === index ? 'text-gray-100 font-bold bg-purple-600 shadow-lg' : 'text-gray-900'}`} color="secondary">{cancha}</IonChip>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default CanchasSport;