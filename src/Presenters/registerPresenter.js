import RegisterView from '../Views/registerView';
import React from 'react';
import { useAuth } from '../authContext';
import { useState, useRef } from 'react';

function RegisterPresenter() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { registerWithEmailAndPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleReg() {
        setLoading(true);
        try {
            await registerWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );
            window.location.hash = '#login';
        } catch (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        }
        setLoading(false);
    }

    return (
        <RegisterView
            handleReg={() => handleReg()}
            loading={loading}
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    );
}

export default RegisterPresenter;
