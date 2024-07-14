import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from "@ionic/react";
import { settingsSharp } from 'ionicons/icons';


function Header() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Canchas tunquelen</IonTitle>
                <IonButton slot="end" shape="round" fill="clear">
                    <IonIcon icon={settingsSharp} size="large" />
                </IonButton>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;