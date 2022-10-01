import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
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

export const detectarCambiosEnLaSesion = async(logIn:any) => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            logIn(user.uid);
        }
    });
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
        return {
            ok:true,
            uid: user.uid
        }

    } catch (error) {
        console.log(error);
        return {
            ok:false,
            uid: ''
        }
    }

}

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return {
            ok: true,
            uid: user.uid
        }
    } catch (error: any) {
        return {
            ok: false,
            msg: error.code,
            uid: ''
        }
    }
}

export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export const getInfoUsuario = async(uid:string) => {

}