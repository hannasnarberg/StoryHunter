import '../CSS/searchResults.css';
import StarIcon from '../Icons/starIcon';

function SearchResultsView({
    searchResults,
    searchQuery,
    setCurrentSeries,
    addToWatchlist,
    watchlist,
    removeFromWatchlist,
}) {
    return (
        <div>
            <h3 className="stringSearchResults">
                Search results for "{searchQuery}":
            </h3>
            <div className="scrollSearchResults">
                {searchResults.results
                    .filter((result) => (result.poster_path ? true : false))
                    .map(function (serie) {
                        return (
                            <span
                                className="searchResultSearchResults"
                                key={serie.id}
                            >
                                <img
                                    src={
                                        'https://image.tmdb.org/t/p/w185' +
                                        serie.poster_path
                                    }
                                    alt={serie.title}
                                    height="200"
                                    className="imageSearchResults"
                                    onClick={() => {
                                        setCurrentSeries(serie.id);
                                        window.location.hash = '#details';
                                    }}
                                ></img>
                                <span
                                    className="starSearchResults"
                                    onClick={() => {
                                        watchlist.find(
                                            (series) => series.id === serie.id
                                        )
                                            ? removeFromWatchlist(serie)
                                            : addToWatchlist(serie);
                                    }}
                                >
                                    <StarIcon
                                        isSolid={watchlist.find(
                                            (series) => series.id === serie.id
                                        )}
                                        size={'2x'}
                                        class="starIcon"
                                    />
                                </span>
                            </span>
                        );
                    })}
            </div>
        </div>
    );
}
export default SearchResultsView;
