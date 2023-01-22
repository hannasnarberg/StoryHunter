import LoginView from '../Views/loginView';
import React from 'react';
import { useAuth } from '../authContext';
import { useState, useRef } from 'react';

function LoginPresenter({ model }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signInWithEmailAndPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    async function handleLogin() {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );
            sessionStorage.setItem('email', emailRef.current.value);
            sessionStorage.setItem('password', passwordRef.current.value);
            window.location.hash = '#home';
        } catch (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        }
        setLoading(false);
    }
    return (
        <LoginView
            handleLogin={() => handleLogin()}
            emailRef={emailRef}
            passwordRef={passwordRef}
            loading={loading}
        />
    );
}

export default LoginPresenter;
