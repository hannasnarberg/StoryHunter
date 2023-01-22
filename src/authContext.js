import { auth } from './firebase.config';
import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(undefined);
    const [loading, setLoading] = useState(true);

    function signInWithEmailAndPassword(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function registerWithEmailAndPassword(email, password) {
        auth.createUserWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
            setLoading(false);
        });
    }, []);

    const value = {
        authUser,
        signInWithEmailAndPassword,
        registerWithEmailAndPassword,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
