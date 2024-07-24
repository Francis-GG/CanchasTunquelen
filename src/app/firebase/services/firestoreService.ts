import { fireStore } from '../config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const getUserData = async (userId: string) => {
    try {
        const userDocRef = doc(fireStore, 'Usuarios', userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            console.log('No such document!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user data: ', error);
        throw error;
    }
};


export { getUserData };
