import { auth } from '../config';
import { User } from 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

const registerWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error registering with email: ", error);
        throw error;
    }
};

const loginWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in with email: ", error);
        throw error;
    }
};

const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in with Google: ", error);
        throw error;
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
        throw error;
    }
};

const DeleteUser = async (user: User) => {
    try {
        await deleteUser(user);
    } catch (error) {
        console.error("Error deleting user: ", error);
        throw error;
    }
}

const authStateListener = (callback: (user: any) => void) => {
    return onAuthStateChanged(auth, callback);
};

export { registerWithEmail, loginWithEmail, loginWithGoogle, logout, authStateListener, DeleteUser };