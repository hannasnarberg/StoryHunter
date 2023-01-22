import '../CSS/afterRandom.css';
import '../CSS/button.css';
import StarIcon from '../Icons/starIcon';
import CrossIcon from '../Icons/crossIcon';

function AfterRandomizeView({
    randomSeries,
    onRandomize,
    setCurrentSeries,
    addToWatchlist,
    inWatchlist,
    removeFromWatchlist,
    onGoBack,
}) {
    if (randomSeries.poster_path) {
        return (
            <div className="containerAfterRandomize">
                <div className="posterContainerAfterRandomize">
                    <img
                        className="posterAfterRandomize"
                        src={
                            'https://image.tmdb.org/t/p/w500' +
                            randomSeries.poster_path
                        }
                        width="180"
                        alt={randomSeries.name}
                        onClick={() => {
                            setCurrentSeries(randomSeries.id);
                            window.location.hash = '#details';
                        }}
                    />
                    <span
                        className="starAfterRandomize"
                        onClick={() => {
                            inWatchlist
                                ? removeFromWatchlist(randomSeries)
                                : addToWatchlist(randomSeries);
                        }}
                    >
                        <StarIcon
                            isSolid={inWatchlist}
                            size={'2x'}
                            class="starIcon"
                        />
                    </span>
                    <span
                        className="moveCrossAfterRandomize"
                        onClick={() => onGoBack()}
                    >
                        <CrossIcon size={'2x'} />
                    </span>
                </div>

                <div className="moveaButtonAfterRandomize">
                    <button className="button" onClick={() => onRandomize()}>
                        Randomize again!
                    </button>
                </div>
            </div>
        );
    } else {
        onRandomize();
        return <div />;
    }
}

export default AfterRandomizeView;
