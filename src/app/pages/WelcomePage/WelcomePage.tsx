import React from 'react';
import { IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const WelcomePage = () => {
    const history = useHistory();

    const handleLoginRedirect = () => {
        history.push('/login');
    };

    const handleSignupRedirect = () => {
        history.push('/signup');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-custom-purple text-white p-4">

            <div className="flex flex-col items-center mb-8">
                <div className="bg-white rounded-3xl w-56 h-56 flex items-center justify-center mb-4 shadow-lg">
                    <img src="logo-canchas.svg" alt="logo-canchas" className="w-[65%]" />
                </div>
                <h1 className="text-4xl font-bold mb-2">¡Bienvenido!</h1>
                <p className="text-lg text-center max-w-sm">
                    Disfruta de la mejor experiencia de reservas deportivas.
                </p>
            </div>


            <IonCard className="w-full max-w-md bg-white text-center shadow-none rounded-xl p-6">
                <IonCardContent>
                    <IonButton
                        expand='block'
                        color={'button-color'}
                        className="mb-4"
                        onClick={handleLoginRedirect}
                    >
                        Iniciar Sesión
                    </IonButton>
                    <IonButton
                        expand='block'
                        color={'button-color'}
                        className="mb-4"
                        onClick={handleSignupRedirect}
                    >
                        Registrarse
                    </IonButton>

                    <div className="flex items-center justify-center my-6">
                        <span className="border-t border-gray-300 flex-grow"></span>
                        <span className="mx-4 text-gray-600">O ingresa con:</span>
                        <span className="border-t border-gray-300 flex-grow"></span>
                    </div>

                    <div className="flex justify-center">
                        <IonButton color={'button-color'} size="large">
                            <IonIcon icon={logoGoogle} />
                        </IonButton>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default WelcomePage;
