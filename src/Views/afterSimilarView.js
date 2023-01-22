import '../CSS/afterSimilar.css';
import '../CSS/button.css';
import StarIcon from '../Icons/starIcon';
import CrossIcon from '../Icons/crossIcon';

function AfterSimilarView({
    similarSeries,
    onFindNewSimilar,
    setCurrentSeries,
    addToWatchlist,
    inWatchlist,
    removeFromWatchlist,
    searchResult,
    onGoBack,
}) {
    if (similarSeries.poster_path) {
        return (
            <div className="containerAfterSimilar">
                <div className="titleAfterSimilar">
                    <h4>Similar results based on: {searchResult.name}</h4>
                    <img
                        className="searchResultAfterSimilar"
                        src={
                            'https://image.tmdb.org/t/p/w500' +
                            searchResult.poster_path
                        }
                        alt={searchResult.name}
                    />
                    <span onClick={() => onGoBack()}>
                        <CrossIcon size={'2x'} />
                    </span>
                </div>
                <div className="posterContainerAfterSimilar">
                    <img
                        className="posterAfterSimilar"
                        src={
                            'https://image.tmdb.org/t/p/w500' +
                            similarSeries.poster_path
                        }
                        alt={similarSeries.name}
                        onClick={() => {
                            setCurrentSeries(similarSeries.id);
                            window.location.hash = '#details';
                        }}
                    />
                    <span
                        className="starAfterSimilar"
                        onClick={() => {
                            inWatchlist
                                ? removeFromWatchlist(similarSeries)
                                : addToWatchlist(similarSeries);
                        }}
                    >
                        <StarIcon
                            isSolid={inWatchlist}
                            size={'2x'}
                            class="starIcon"
                        />
                    </span>
                </div>
                <div className="moveButtonAfterSimilar">
                    <button
                        className="button "
                        onClick={() => onFindNewSimilar()}
                    >
                        Get new similar series
                    </button>
                </div>
            </div>
        );
    } else {
        onFindNewSimilar();
        return <div />;
    }
}

export default AfterSimilarView;
