import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from "@ionic/react";
import { settingsSharp } from 'ionicons/icons';


function Header() {
    return (
        <IonHeader>
            <IonToolbar>
                <div className="flex items-center justify-between w-full">
                    <img src="/header-logo.svg" alt="Header Logo" className="w-[80%] h-auto ml-3" />
                    <IonButton slot="end" shape="round" fill="clear">
                        <IonIcon icon={settingsSharp} size="large" />
                    </IonButton>
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;