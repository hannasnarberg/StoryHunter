import '../CSS/logout.css';
import '../CSS/button.css';

function LogoutView({ onLogout }) {
    return (
        <div className="centerContent">
            <h1>Are you sure you want to log out?</h1>
            <div className="centerLogout">
                <button className="button" onClick={() => onLogout()}>
                    Yes
                </button>
                <button
                    className="button"
                    onClick={() => (window.location.hash = '#home')}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default LogoutView;
