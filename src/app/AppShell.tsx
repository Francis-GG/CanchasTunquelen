import { IonApp, IonRouterOutlet, setupIonicReact, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { home, calendarNumber, notifications, personCircleOutline, time } from 'ionicons/icons';
import React from 'react';

import HomePage from './pages/Home/HomePage';
import PerfilPage from './pages/Perfil/PerfilPage';
import ReservaPage from './pages/Reserva/ReservaPage';
import HistorialPage from "./pages/Historial/HistorialPage";
import NotificacionesPage from "./pages/Notificaciones/NotificacionesPage";

setupIonicReact({});

function Example() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Canchas tunquelen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path="/" to="/home" />
              <Route path="/home" component={HomePage} exact={true} />
              <Route path="/historial" component={HistorialPage} exact={true} />
              <Route path="/reserva" component={ReservaPage} exact={true} />
              <Route path="/notificaciones" component={NotificacionesPage} exact={true} />
              <Route path="/perfil" component={PerfilPage} exact={true} />
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
                <IonIcon icon={calendarNumber} /> {/* Remove size="large" as it's not supported */}
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
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default Example;
