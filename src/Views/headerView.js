import '../CSS/header.css';
import '../CSS/button.css';
import SearchIcon from '../Icons/searchIcon';

function HeaderView({onText, onSearch, onLogout, userEmail}) {
    return (
        <div className="containerHeader">
            <div className="container1Header">
                <span>
                    <h2
                        className="homeButtonHeader"
                        onClick={() => (window.location.hash = '#home')}
                    >
                        StoryHunter
                    </h2>
                    <div className="tagLineHeader">
                        - Let's find your new favorite TV-show!
                    </div>
                </span>
            </div>
            <div className="container2Header">
                <input
                    type="text"
                    className="inputTextBoxHeader"
                    placeholder="Search for a TV-show here..."
                    onInput={(e) => {
                        onText(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            onSearch();
                            window.location.hash = '#searchresults';
                        }
                    }}
                />

                <button
                    className="searchButton"
                    onClick={() => {
                        onSearch();
                        window.location.hash = '#searchresults';
                    }}
                >
                    <SearchIcon size={'1x'} />
                </button>
            </div>
            <div>
                <span>
                    <h5 className="moveLeftHeader ">
                        Welcome, {userEmail}
                    </h5>
                </span>
            </div>
            <button
                className="logoutButtonHeader"
                onClick={() => onLogout()}
            >
                Logout
            </button>
        </div>
    );
}

export default HeaderView;
