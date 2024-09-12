import React, { useState } from 'react';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton, IonIcon, IonToast } from '@ionic/react';
import { lockClosed, mail } from 'ionicons/icons';
import { loginWithEmail } from '@/app/firebase/services/authservice';
import { useHistory } from 'react-router-dom';

import { FieldValues, useForm } from 'react-hook-form';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const history = useHistory();

    const handleLogin = async (data: FieldValues) => {
        await loginWithEmail(data.email, data.password);
        history.push('/home')

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
                <form onSubmit={handleSubmit(handleLogin)}>
                    <IonCard className="shadow-none rounded-lg p-4 border-2 border-gray-100">
                        <IonCardContent>
                            <IonItem className="bg-gray-100 mb-4">
                                <IonIcon icon={mail} slot='start' className="text-gray-600" />
                                <IonInput
                                    {...register('email', { required: 'Se requiere un email válido' })}
                                    type='email'
                                    placeholder='Email'
                                />
                            </IonItem>
                            {errors.email && (<p className='text-red-500 text-xs pl-8'>{`${errors.email.message}`}</p>)}
                            <IonItem className="bg-gray-100 mb-4">
                                <IonIcon icon={lockClosed} slot='start' className="text-gray-600" />
                                <IonInput
                                    {...register('password', { required: 'Se requiere una contraseña' })}
                                    type='password'
                                    placeholder='Password'
                                />
                            </IonItem>
                            {errors.password && (<p className="text-red-500 text-xs pl-8">{`${errors.password.message}`}</p>)}
                            <IonButton className='pt-3' expand='block' color={"button-color"} type='submit' disabled={isSubmitting}>{isSubmitting ? 'Iniciando Sesión...' : 'Iniciar Sesión'}</IonButton>
                            <span onClick={() => history.push('/reset')} className="flex justify-end mt-4" style={{ textDecoration: 'underline' }}>¿Olvidaste tu contraseña?</span>

                        </IonCardContent>
                    </IonCard>
                </form>
            </div>
        </>
    )
};

export default LoginPage;