import './CSS/App.css';
import LoginPresenter from './Presenters/loginPresenter';
import RegisterPresenter from './Presenters/registerPresenter';
import OverviewPresenter from './Presenters/overviewPresenter';
import WatchlistPresenter from './Presenters/watchlistPresenter';
import HeaderPresenter from './Presenters/headerPresenter';
import { useAuth } from './authContext';
import SimilarSeriesPresenter from './Presenters/similarSeriesPresenter';
import Show from './Presenters/showPresenter';
import DetailsPresenter from './Presenters/detailsPresenter';
import LogOutPresenter from './Presenters/logOutPresenter';
import RandomizePresenter from './Presenters/randomizePresenter';
import SearchResultPresenter from './Presenters/searchResultPresenter';
import { useState, useEffect } from 'react';
import { PersistModel, FetchModel } from './firebasemodel';

function App({ model }) {
    const [searchQuery, setSearchQuery] = useState(null);
    const [userModelFetched, setUserModelFetched] = useState(false);
    const { authUser, signInWithEmailAndPassword } = useAuth();
    useEffect(() => {
        const email = sessionStorage.getItem('email');
        const password = sessionStorage.getItem('password');
        if (authUser && email && password && !userModelFetched) {
            signInWithEmailAndPassword(email, password);
            FetchModel(model, authUser, () => {
                setUserModelFetched(true);
            });
        }
    }, [authUser, model, signInWithEmailAndPassword, userModelFetched]);

    useEffect(() => {
        if (authUser) {
            PersistModel(model, authUser);
        }
    }, [authUser, model]);

    return (
        <div>
            <Show hash="#login">
                <LoginPresenter model={model} />
            </Show>
            <Show hash="#register">
                <RegisterPresenter />
            </Show>
            {authUser && (
                <>
                    <HeaderPresenter
                        setSearchQuery={(query) => setSearchQuery(query)}
                    />
                    <div className="containerApp">
                        <Show hash="#home">
                            <WatchlistPresenter model={model} />
                        </Show>
                        <Show hash="#details">
                            <WatchlistPresenter model={model} />
                        </Show>
                        <Show hash="#searchresults">
                            <WatchlistPresenter model={model} />
                        </Show>
                        <Show hash="#home">
                            <div className="mainContentApp">
                                <OverviewPresenter model={model} />
                                <div className="randomizeAndSimilarApp">
                                    <RandomizePresenter model={model} />
                                    <SimilarSeriesPresenter model={model} />
                                </div>
                            </div>
                        </Show>
                        <Show hash="#details">
                            <DetailsPresenter model={model} />
                        </Show>
                        <Show hash="#logout">
                            <LogOutPresenter model={model} />
                        </Show>
                        <Show hash="#searchresults">
                            <SearchResultPresenter
                                model={model}
                                searchQuery={searchQuery}
                            />
                        </Show>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;

function defaultRoute() {
    if (
        ![
            '#home',
            '#details',
            '#searchresults',
            '#logout',
            '#login',
            '#register',
        ].find((knownRoute) => knownRoute === window.location.hash)
    )
        window.location.hash = '#login';
}
defaultRoute(); // when the application loads, set the default route!
window.addEventListener('hashchange', (onChange) => defaultRoute());

/*const [searchQuery, setSearchQuery] = useState(null);
    const [userModelFetched, setUserModelFetched] = useState(false);
    const { authUser } = useAuth();
    useEffect(() => {
        if (authUser && !userModelFetched) {
            FetchModel(model, authUser, () => setUserModelFetched(true));
            PersistModel(model, authUser);
        }
    }, [authUser]);*/

/*
const [searchQuery, setSearchQuery] = useState(null);
return (
    <div>
        <HeaderPresenter setSearchQuery={(query) => setSearchQuery(query)} />
        <div className="container">
            <Show hash="#home">
                <WatchlistPresenter model={myModel} />
            </Show>
            <Show hash="#details">
                <WatchlistPresenter model={myModel} />
            </Show>
            <Show hash="#searchresults">
                <WatchlistPresenter model={myModel} />
            </Show>
            <Show hash="#home">
                <div className="mainContent">
                    <OverviewPresenter model={myModel} />
                    <div className="randomizeAndSimilar">
                        <RandomizePresenter model={myModel} />
                        <SimilarSeriesPresenter model={myModel} />
                    </div>
                </div>
            </Show>
            <Show hash="#details">
                <DetailsPresenter model={myModel} />
            </Show>
            <Show hash="#logout">
                <LogoutView />
            </Show>
            <Show hash="#searchresults">
                <SearchResultPresenter
                    model={myModel}
                    searchQuery={searchQuery}
                />
            </Show>
        </div>
    </div>
);*/

/*
return (
    <Router>
        <Routes>
            <Route exact path="/" element={<LoginPresenter />} />
            <Route
                exact
                path="/register"
                element={<RegisterPresenter />}
            ></Route>
            <Route
                exact
                path="/dashboard"
                element={<OverviewPresenter model={model} />}
            />
            <Route
                exact
                path="/dashboard"
                element={<WatchlistPresenter model={model} />}
            />
        </Routes>
    </Router>
); */
