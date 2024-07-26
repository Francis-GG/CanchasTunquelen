import { fireStore } from '../config';
import { doc, getDoc, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

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

export const getUserReservations = async (userId: string) => {
    const bookingsRef = collection(fireStore, 'Reservas');
    const q = query(
        bookingsRef,
        where('userId', '==', userId),
        orderBy('date'),
        orderBy('time'),
        limit(3)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
}


export { getUserData };
