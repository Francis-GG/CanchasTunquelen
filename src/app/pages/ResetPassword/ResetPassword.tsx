import React, { useState } from 'react';
import {
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonAlert,
    IonToast,
} from '@ionic/react';
import { mail } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

import { FieldValues, useForm } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/firebase/config';

const ResetPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        getValues,
    } = useForm();

    const history = useHistory();

    // State to control the alert visibility
    const [showAlert, setShowAlert] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleReset = async (data: FieldValues) => {
        try {
            await sendPasswordResetEmail(auth, data.email);
            // Set alert visibility to true on successful email send
            setShowAlert(true);
        } catch (error) {
            // Handle errors here (e.g., display a toast or error message)
            console.error('Error sending password reset email:', error);
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
                <h1 className="text-2xl font-bold text-center">Recuperar Contraseña</h1>
            </div>
            <div className="absolute top-1/3 left-2 right-2 mx-auto">
                <form onSubmit={handleSubmit(handleReset)}>
                    <IonCard className="shadow-none rounded-lg p-4 border-2 border-gray-100">
                        <IonCardContent>
                            <IonItem className="bg-gray-100 mb-4">
                                <IonIcon icon={mail} slot="start" className="text-gray-600" />
                                <IonInput
                                    {...register('email', {
                                        required: 'Se requiere un email válido',
                                    })}
                                    type="email"
                                    placeholder="Email"
                                />
                            </IonItem>
                            {errors.email && (<p className="text-red-500 text-xs pl-8">{`${errors.email.message}`}</p>)}
                            <IonButton
                                className="pt-3"
                                expand="block"
                                id="email-sent"
                                color="button-color"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar mail'}
                            </IonButton>

                            <IonAlert
                                isOpen={showAlert} // Use the state variable to control alert visibility
                                onDidDismiss={() => setShowAlert(false)} // Reset alert state on dismiss
                                header="Mail enviado"
                                message={`Un mail ha sido enviado a tu correo: ${getValues(
                                    'email'
                                )} para que puedas recuperar tu contraseña`}
                                buttons={[
                                    {
                                        text: 'Regresar a Inicio de Sesión',
                                        handler: () => history.push('/login'),
                                    },
                                ]}
                            ></IonAlert>

                            <IonToast
                                isOpen={showToast}
                                message="This toast will close in 5 seconds"
                                onDidDismiss={() => setShowToast(false)}
                                duration={5000}
                            ></IonToast>
                        </IonCardContent>
                    </IonCard>
                </form>
            </div>
        </>
    );
};

export default ResetPage;