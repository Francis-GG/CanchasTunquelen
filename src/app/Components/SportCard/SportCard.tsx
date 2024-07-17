import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SportCard.css';

interface SportCardProps {
    title: string;
    backgroundImage: string;
}

const SportCard: React.FC<SportCardProps> = ({ title, backgroundImage }) => (
    <IonCard className="custom-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <IonCardHeader>
            <IonCardTitle className='font-bold'>{title}</IonCardTitle>
        </IonCardHeader>
    </IonCard>
);

export default SportCard;