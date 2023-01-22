import HeaderView from '../Views/headerView';
import { useState } from 'react';
import { useAuth } from '../authContext';

function HeaderPresenter({setSearchQuery}) {
    const [query, setQuery] = useState(null);
    const { authUser } = useAuth();
    return (
        <HeaderView
            onText={(value) => setQuery(value)}
            onSearch={() => {
                setSearchQuery(query);
            }}
            onLogout={() => (window.location.hash = '#logout')}
            userEmail={authUser.email}
        />
    );
}
export default HeaderPresenter;
