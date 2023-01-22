import '../CSS/button.css';
import '../CSS/authentication.css';

function RegisterView({ emailRef, passwordRef, loading, handleReg }) {
    return (
        <div>
            <div className="titleAuth">StoryHunter </div>
            <div className="sloganAuth">
                - Let's find your new favorite TV-show
            </div>
            <div className="loginAuth">
                <div className="loginContainerAuth">
                    <h1 className="changeColorAuth">Create an account!</h1>
                    <input
                        type="text"
                        className="loginBoxAuth"
                        ref={emailRef}
                        required
                        placeholder="E-mail Address"
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleReg();
                            }
                        }}
                    />
                    <input
                        type="password"
                        className="loginBoxAuth"
                        ref={passwordRef}
                        required
                        placeholder="Password"
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleReg();
                            }
                        }}
                    />
                    <button
                        className="button"
                        disabled={loading}
                        onClick={() => {
                            handleReg();
                            window.location.hash = '#login';
                        }}
                    >
                        Register
                    </button>
                    <div className="changeColorAuth">
                        Already have an account?{' '}
                        <button
                            className="button"
                            onClick={() => (window.location.hash = '#login')}
                        >
                            Log in
                        </button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterView;
