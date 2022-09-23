import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {app} from './index';

const auth = getAuth(app);

interface UserData {
    uid: string;
    name: string;
    email: string;
    phone: string;
    photoURL:string;
    createdAt: {
        lastLoginAt: string;
        creationTime: string;
    }
}

export const createAnUserWithEmailAndPassword = async(name:string,email:string, password:string) => {

    try {
        const {user} = await createUserWithEmailAndPassword(auth,email, password);
        const userData: UserData = {
            uid: user.uid,
            email: (user.email) ? user.email : '',
            name,
            phone: user.phoneNumber || '',
            photoURL: user.photoURL || '',
            createdAt: {
                creationTime: user.metadata.creationTime || '',
                lastLoginAt: user.metadata.lastSignInTime || ''
            }
        }
     
        console.log(user);
     //await setDoc( doc(db, "users", user.uid), userData);

    } catch (error) {
        console.log(error);
    }

}