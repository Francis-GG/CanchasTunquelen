import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './HorizontalCalendar.css';

const generatePlaceholders = () => {
    const placeholders = [];
    for (let i = 0; i < 27; i++) {
        placeholders.push(`Day ${i + 1}`);
    }
    return placeholders;
};

const HorizontalCalendar = () => {
    const placeholders = generatePlaceholders();

    return (
        <IonGrid className="horizontal-calendar" fixed={true} >
            <IonRow >
                {placeholders.map((placeholder, index) => (
                    <IonCol size="auto" key={index} className="calendar-day">
                        <div className="day-content">
                            <p>{placeholder}</p>
                        </div>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default HorizontalCalendar;