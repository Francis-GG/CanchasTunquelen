import { IonApp, IonRouterOutlet, setupIonicReact, IonContent } from "@ionic/react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useLocation } from "react-router-dom";
import { home, calendarNumber, personCircleOutline } from 'ionicons/icons';

import React from 'react';

// Pages
import HomePage from './pages/Home/HomePage';
import PerfilPage from './pages/Perfil/PerfilPage';
import ReservaPage from './pages/Reserva/ReservaPage';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

// Components
import Header from "./Components/Header/header";

setupIonicReact();

const AppShell = () => (
  <IonApp>
    <IonReactRouter>
      <AppContent />
    </IonReactRouter>
  </IonApp>
);

const AppContent = () => {
  const location = useLocation();
  console.log(location.pathname);
  const showHeaderAndTabs = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/welcome";

  return (
    <>
      {showHeaderAndTabs && <Header />}
      <IonContent>
        {showHeaderAndTabs ? (
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <IonPage>
                  <HomePage />
                </IonPage>
              </Route>
              <Route path="/reserva" exact>
                <IonPage>
                  <ReservaPage />
                </IonPage>
              </Route>
              <Route path="/perfil" exact>
                <IonPage>
                  <PerfilPage />
                </IonPage>
              </Route>
              <Route path="/main" exact>
                <IonPage>
                  <MainPage />
                </IonPage>
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Inicio</IonLabel>
              </IonTabButton>

              <IonTabButton tab="reserva" href="/reserva">
                <IonIcon icon={calendarNumber} />
                <IonLabel>Reserva</IonLabel>
              </IonTabButton>

              <IonTabButton tab="perfil" href="/perfil">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Perfil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <IonRouterOutlet>
            <Route path="/welcome" exact>
              <IonPage className='bg-custom-gray'>
                <WelcomePage />
              </IonPage>
            </Route>
            <Route path="/login" exact>
              <IonPage className='bg-custom-gray'>
                <LoginPage />
              </IonPage>
            </Route>
            <Route path="/signup" exact>
              <IonPage className='bg-custom-gray'>
                <SignUpPage />
              </IonPage>
            </Route>
          </IonRouterOutlet>
        )}
      </IonContent>
    </>
  );
};

export default AppShell;
