import LogoutView from '../Views/logoutView';
import { useAuth } from '../authContext';

function LogOutPresenter({ model }) {
    const { logout } = useAuth();
    return (
        <LogoutView
            onLogout={() => {
                logout();
                model.removeAllObservers();
                model.emptyWatchlist();
                window.location.hash = '#login';
                sessionStorage.removeItem('email');
                sessionStorage.removeItem('password');
            }}
        />
    );
}

export default LogOutPresenter;
