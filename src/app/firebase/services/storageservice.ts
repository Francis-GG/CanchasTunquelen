import { storage_app } from "../config";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export const uploadProfileImage = async (userId: string, base64Image: string): Promise<string> => {
    try {
        const imageRef = ref(storage_app, `users/${userId}/profile.jpg`);
        await uploadString(imageRef, base64Image, 'base64');

        const imageUrl = await getDownloadURL(imageRef);
        return imageUrl;
    } catch (error) {
        console.error('Error uploading image to Firebase Storage:', error);
        throw error;
    }
};