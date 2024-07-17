import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SportCard.css';

interface SportCardProps {
    title: string;
    backgroundImage: string;
    className?: string;
    redirectTo: string;
    courtType: string; // New prop for court type
}

const SportCard: React.FC<SportCardProps> = ({ title, backgroundImage, className, redirectTo, courtType }) => {
    const history = useHistory();

    const handleCardClick = () => {
        history.push(`${redirectTo}?court=${courtType}`);
    };

    return (
        <IonCard
            className={`custom-card ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onClick={handleCardClick}
        >
            <IonCardHeader>
                <IonCardTitle className='font-bold'>{title}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default SportCard;