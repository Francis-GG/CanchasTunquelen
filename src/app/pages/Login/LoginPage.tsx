import React, { useState } from 'react';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton, IonIcon, IonToast } from '@ionic/react';
import { lockClosed, mail } from 'ionicons/icons';
import { loginWithEmail } from '@/app/firebase/services/authservice';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleLogin = async () => {
        try {
            await loginWithEmail(email, password);
        } catch (error) {
            setErrorMessage('Error al iniciar sesión. Verifique su email y contraseña.')
            setShowToast(true);
        }
    };

    return (

        <>
            <div className="bg-[#613FA0] h-1/2 rounded-b-3xl p-4 flex flex-col items-center text-white">
                <div className="flex items-center justify-center h-1/2 mb-4">
                    <div className="bg-white rounded-2xl w-36 h-[10rem] flex items-center justify-center">
                        <img src="logo-canchas.svg" alt="logo-canchas" className="w-3/4" />
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-center">Bienvenido de vuelta</h1>
            </div>
            <div className="absolute top-1/3 left-2 right-2 mx-auto">
                <IonCard className="shadow-none rounded-lg p-4 border-2 border-gray-100">
                    <IonCardContent>
                        <IonItem className="bg-gray-100 mb-4">
                            <IonIcon icon={mail} slot='start' className="text-gray-600" />
                            <IonInput
                                type='text'
                                placeholder='Email'
                                value={email}
                                onIonInput={(e: any) => setEmail(e.target.value)}
                            />
                        </IonItem>
                        <IonItem className="bg-gray-100 mb-4">
                            <IonIcon icon={lockClosed} slot='start' className="text-gray-600" />
                            <IonInput
                                type='password'
                                placeholder='Password'
                                value={password}
                                onIonInput={(e: any) => setPassword(e.target.value)}
                            />
                        </IonItem>
                        <IonButton expand='block' color={"button-color"} onClick={handleLogin}>
                            Iniciar Sesión
                        </IonButton>
                        {errorMessage && (
                            <IonToast
                                className='custom-toast'
                                isOpen={showToast}
                                onDidDismiss={() => setShowToast(false)}
                                message={errorMessage}
                                duration={5000}
                            />
                        )}
                    </IonCardContent>
                </IonCard>
            </div>
        </>
    )
};

export default LoginPage;