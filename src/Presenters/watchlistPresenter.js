import useModelProp from '../Custom-hooks/useModelProp';
import WatchListView from '../Views/watchListView';

function WatchlistPresenter({ model }) {
    const watchlist = useModelProp(model, 'watchlist');
    return (
        <WatchListView
            setCurrentSeries={(id) => model.setCurrentSeries(id)}
            addToWatchlist={(details) => model.addToWatchlist(details)}
            watchlist={watchlist}
            removeFromWatchlist={(details) =>
                model.removeFromWatchlist(details)
            }
        />
    );
}

export default WatchlistPresenter;
