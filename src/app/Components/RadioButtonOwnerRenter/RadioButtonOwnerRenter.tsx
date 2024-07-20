
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { key, home } from 'ionicons/icons';

const RadioButtonOwnerRenter: React.FC = () => {
    const [selected, setSelected] = useState<'owner' | 'renter' | null>(null);

    return (
        <div className="flex justify-evenly gap-4 my-4 pt-4">
            <div className="flex flex-col items-center">
                <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${selected === 'owner' ? 'bg-[#613FA0] text-white' : 'bg-gray-200 text-black'
                        }`}
                    onClick={() => setSelected('owner')}
                >
                    <IonIcon icon={home} />
                </button>
                <span className="mt-2 text-center">Dueño</span>
            </div>
            <div className="flex flex-col items-center">
                <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${selected === 'renter' ? 'bg-[#613FA0] text-white' : 'bg-gray-200 text-black'
                        }`}
                    onClick={() => setSelected('renter')}
                >
                    <IonIcon icon={key} />
                </button>
                <span className="mt-2 text-center">Arrendatario</span>
            </div>
        </div>
    );
};

export default RadioButtonOwnerRenter;