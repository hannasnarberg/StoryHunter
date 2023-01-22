import '../CSS/authentication.css';
import '../CSS/button.css';

function LoginView({ handleLogin, emailRef, passwordRef, loading }) {
    return (
        <div>
            <div className="titleAuth">StoryHunter </div>
            <div className="sloganAuth">
                - Let's find your new favorite TV-show!
            </div>
            <div className="loginAuth">
                <div className="loginContainerAuth">
                    <h1 className="changeColorAuth">Log in!</h1>
                    <input
                        type="text"
                        className="loginBoxAuth"
                        ref={emailRef}
                        placeholder="E-mail Address"
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin();
                            }
                        }}
                    />
                    <input
                        type="password"
                        className="loginBoxAuth"
                        ref={passwordRef}
                        placeholder="Password"
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin();
                            }
                        }}
                    />
                    <button
                        disabled={loading}
                        className="button"
                        onClick={() => handleLogin()}
                    >
                        Login
                    </button>
                    <div className="changeColorAuth">
                        Don't have an account?{' '}
                        <button
                            className="button"
                            onClick={() => (window.location.hash = '#register')}
                        >
                            Register
                        </button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginView;
