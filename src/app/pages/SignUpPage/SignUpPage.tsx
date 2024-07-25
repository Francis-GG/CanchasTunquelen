import React, { useState } from 'react';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton, IonIcon, IonPage } from '@ionic/react';
import { lockClosed, mail, person, home, call } from 'ionicons/icons';
import { registerWithEmail } from '@/app/firebase/services/authservice';
import { fireStore, auth } from '@/app/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import { FieldValues, useForm } from 'react-hook-form';

import RadioButtonOwnerRenter from '@/app/Components/RadioButtonOwnerRenter/RadioButtonOwnerRenter';

const SignUpPage = () => {

    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
        setValue,
    } = useForm();


    const history = useHistory();

    const handleRegister = async (data: FieldValues) => {
        console.log('password', data.password)
        console.log('confirmpassword', data.confirmPassword)
        await registerWithEmail(data.email, data.password);

        reset();
        setStep(2);
    };

    const handleUserDataSubmit = async (data: FieldValues) => {
        try {
            const userId = auth.currentUser?.uid;
            if (!userId) {
                // Handle the case where userId is undefined
                console.error('User is not logged in');
                alert('Error: Usuario no está logueado');
                return; // Exit the function early
            }

            const name = data.name;

            console.log('userId', userId);
            console.log('data', data);
            console.log('name', name);

            await setDoc(doc(fireStore, 'Usuarios', userId), {
                name: data.name,
                lastName: data.lastName,
                houseNumber: data.houseNumber,
                phone: data.number,
                role: data.role,
            });
            setStep(0);
            history.push('/home');
        } catch (error) {
            console.error('Error setting user data: ', error);
            alert('Error guardando datos de usuario');
        }


    };

    const handleRoleChange = (role: 'owner' | 'renter' | null) => {
        setValue('role', role);
    };


    return (


        <IonPage>

            {step === 1 ? (
                <>
                    <div className="bg-[#613FA0] h-1/2 rounded-b-3xl p-4 flex flex-col items-center text-white">
                        <div className="flex items-center justify-center h-1/2 mb-4">
                            <div className="bg-white rounded-2xl w-36 h-[10rem] flex items-center justify-center">
                                <img src="logo-canchas.svg" alt="logo-canchas" className="w-3/4" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-center">Regístrate</h1>
                    </div>
                    <div className="absolute top-1/3 left-2 right-2 mx-auto">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <IonCard className="shadow-none rounded-lg p-4 border-2 border-gray-100">
                                <IonCardContent>
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={mail} slot='start' className="text-gray-600" />
                                        <IonInput {...register("email", { required: "Se requiere un email válido" })} type='email' placeholder='Email' />
                                    </IonItem>
                                    {errors.email && (<p className="text-red-500 text-xs pl-8">{`${errors.email.message}`}</p>)}
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={lockClosed} slot='start' className="text-gray-600" />
                                        <IonInput {...register("password", { required: "Se requiere una contraseña", minLength: { value: 6, message: "La contraseña debe tener como mínimo 6 caracteres" } })} type='password' placeholder='Contraseña' />
                                    </IonItem>
                                    {errors.password && (<p className="text-red-500 text-xs pl-8">{`${errors.password.message}`}</p>)}
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={lockClosed} slot='start' className="text-gray-600" />
                                        <IonInput {...register("confirmPassword", { required: "Se requiere confirmar la contraseña", validate: (value) => value === getValues("password") || "Las contraseñas deben ser iguales" })} type='password' placeholder='Confirmar contraseña' />
                                    </IonItem>
                                    {errors.confirmPassword && (<p className="text-red-500 text-xs pl-8">{`${errors.confirmPassword.message}`}</p>)}
                                    <IonButton className='pt-3' expand='block' color={"button-color"} type='submit' disabled={isSubmitting}>{isSubmitting ? 'Registrando...' : 'Registrarse'}</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </form>
                    </div>
                </>
            ) : (
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
                        <form onSubmit={handleSubmit(handleUserDataSubmit)}>
                            <IonCard className="shadow-none rounded-lg p-4 border-2 border-gray-100">
                                <IonCardContent>
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={person} slot='start' className="text-gray-600" />
                                        <IonInput {...register("name", { required: "Se requiere un nombre" })} type='text' placeholder='Nombre' />
                                    </IonItem>
                                    {errors.name && (<p className="text-red-500 text-xs pl-8">{`${errors.name.message}`}</p>)}
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={person} slot='start' className="text-gray-600" />
                                        <IonInput {...register("lastName", { required: "Se requiere un apellido" })} type='text' placeholder='Apellido' />
                                    </IonItem>
                                    {errors.lastName && (<p className="text-red-500 text-xs pl-8">{`${errors.lastName.message}`}</p>)}
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={home} slot='start' className="text-gray-600" />
                                        <IonInput {...register("houseNumber", { required: "Se requiere un número de casa" })} type='number' placeholder='Número casa' />
                                    </IonItem>
                                    {errors.houseNumber && (<p className="text-red-500 text-xs pl-8">{`${errors.houseNumber.message}`}</p>)}
                                    <IonItem className="bg-gray-100 mb-4">
                                        <IonIcon icon={call} slot='start' className="text-gray-600" />
                                        <IonInput {...register("number", { required: "Se requiere un número de teléfono" })} type='text' placeholder='Teléfono' />
                                    </IonItem>
                                    {errors.number && (<p className="text-red-500 text-xs pl-8">{`${errors.number.message}`}</p>)}
                                    <RadioButtonOwnerRenter onSelectionChange={handleRoleChange} />
                                    {/* <RadioButtonOwnerRenter onSelectionChange={(selection) => setRole(selection!)} /> */}

                                    <IonButton expand='block' color={"button-color"} type='submit' disabled={isSubmitting}>
                                        {isSubmitting ? 'Guardando...' : 'Finalizar'}
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </form>
                    </div>
                </>
            )}
        </IonPage>
    )
};

export default SignUpPage;