import { IonApp, IonRouterOutlet, setupIonicReact, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { playCircle, home, calendarNumber, notifications, personCircleOutline, time } from 'ionicons/icons';
import React from 'react';

import HomePage from './pages/HomePage';
import PerfilPage from './pages/PerfilPage';
import ReservaPage from './pages/ReservaPage';
import HistorialPage from "./pages/HistorialPage";
import NotificacionesPage from "./pages/NotificacionesPage";

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
          <Route path="/historial" render={() => <HistorialPage />} exact={true} />
          <Route path="/reserva" render={() => <ReservaPage />} exact={true} />
          <Route path="/notificaciones" render={() => <NotificacionesPage />} exact={true} />
          <Route path="/perfil" render={() => <PerfilPage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="historial" href="/historial">
            <IonIcon icon={time} />
            <IonLabel>Historial</IonLabel>
          </IonTabButton>

          <IonTabButton tab="reserva" href="/reserva">
            <IonIcon size="large" icon={calendarNumber} /> {/* Change to custom size on CSS file */}
            <IonLabel>Reserva</IonLabel>
          </IonTabButton>

          <IonTabButton tab="notificaciones" href="/notificaciones">
            <IonIcon icon={notifications} />
            <IonLabel>Notificaciones</IonLabel>
          </IonTabButton>

          <IonTabButton tab="perfil" href="/perfil">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>


    </IonReactRouter>
  );
}
export default Example;