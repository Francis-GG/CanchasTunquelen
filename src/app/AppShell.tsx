import { IonApp, IonRouterOutlet, setupIonicReact, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { playCircle, home, calendarNumber, search, personCircleOutline } from 'ionicons/icons';
import React from 'react';

import HomePage from './pages/HomePage';
import PerfilPage from './pages/PerfilPage';
import ReservaPage from './pages/ReservaPage';

setupIonicReact({});




function Example() {
  return (
    <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Canchas tunquelen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <PerfilPage />} exact={true} />
          <Route path="/reserva" render={() => <ReservaPage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Reserva" href="/reserva">
            <IonIcon size="large" icon={calendarNumber} /> {/* Change to custom size on CSS file */}
            <IonLabel>Reserva</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>


    </IonReactRouter>
  );
}
export default Example;