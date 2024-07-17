import React from 'react';
import { IonGrid, IonRow, IonCol, IonChip } from '@ionic/react';

interface CanchasSportProps {
    sport: string;
}

function CanchasSport({ sport }: CanchasSportProps) {

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
                        <IonChip color="secondary">{cancha}</IonChip>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default CanchasSport;