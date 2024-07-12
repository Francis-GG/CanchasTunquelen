import { IonApp, IonRouterOutlet, setupIonicReact, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { redirect, Route } from "react-router-dom";

setupIonicReact({});

const AppShell = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Content</h1>
      </IonContent>
    </IonApp>
  );
};

export default AppShell;