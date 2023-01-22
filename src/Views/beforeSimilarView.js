import '../CSS/beforeSimilar.css';
import '../CSS/button.css';
import SearchIcon from '../Icons/searchIcon';

function BeforeSimilarView({ onText, onFindSimilar, invalidSearch }) {
    return (
        <div className="container1BeforeSimilar">
            <div className="container2BeforeSimilar">
                <span>
                    <h3>
                        Do you have a favorite series and want to watch
                        something similar?
                    </h3>
                </span>
                <input
                    className="searchBarBeforeSimilar "
                    placeholder="The title of your favourite series..."
                    onInput={(e) => onText(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            onFindSimilar();
                        }
                    }}
                />

                <button className="searchButton" onClick={() => onFindSimilar()}>
                    <SearchIcon size={'1x'} />
                </button>
                <div>
                    {invalidSearch
                        ? 'Nothing to show. Check the spelling or try with a new series !'
                        : null}
                </div>
            </div>
        </div>
    );
}

export default BeforeSimilarView;
