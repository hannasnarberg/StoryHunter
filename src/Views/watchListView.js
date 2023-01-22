import '../CSS/watchList.css';
import StarIcon from '../Icons/starIcon';

function WatchListView({
    watchlist,
    removeFromWatchlist,
    addToWatchlist,
    setCurrentSeries,
}) {
    return (
        <div className="outerdivWatchList">
            <div className="titleWatchList">
                <h5 className="titleTextWatchList">Watch list</h5>
                <StarIcon size="1x" isSolid={true} class="titleStarIcon" />
            </div>
            {(watchlist.length !== 0)?(
                
            <div className="watchList">
                
                {watchlist
                    .filter((series) => (series.poster_path ? true : false))
                    .map((series) => (
                        <div key={series.id}>
                            <span className="elementWatchlist">
                                <img
                                    className="imageWatchlist"
                                    alt="Poster"
                                    src={
                                        'https://image.tmdb.org/t/p/w500' +
                                        series.poster_path
                                    }
                                    width="80"
                                    onClick={() => {
                                        setCurrentSeries(series.id);
                                        window.location.hash = '#details';
                                    }}
                                />
                                <span
                                    className="starWatchList"
                                    onClick={() => {
                                        watchlist.find(
                                            (watchListSeries) =>
                                                watchListSeries.id === series.id
                                        )
                                            ? removeFromWatchlist(series)
                                            : addToWatchlist(series);
                                    }}
                                >
                                    <StarIcon
                                        isSolid={watchlist.find(
                                            (watchListSeries) =>
                                                watchListSeries.id === series.id
                                        )}
                                        size={'2x'}
                                        class="starIcon"
                                    />
                                </span>
                                <h4 className="nameSeriesWatchList">
                                    {series.name}
                                </h4>
                            </span>
                        </div>
                    ))}
            </div>):

            (<div className="watchListEmpty">
                <div className= "watchListEmptyText">Add to the watch list by clicking the star of a series!</div>
            </div>)}
        </div>
    );
}

export default WatchListView;
