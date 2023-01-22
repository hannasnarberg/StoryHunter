import useModelProp from '../Custom-hooks/useModelProp';
import DetailsView from '../Views/detailsView';

function DetailsPresenter({ model }) {
    const details = useModelProp(model, 'currentSeriesDetails');
    const watchlist = useModelProp(model, 'watchlist');
    return (
        <DetailsView
            watchlist={watchlist}
            details={details}
            inWatchlist={
                details
                    ? watchlist.find(
                          (watchListSeries) => watchListSeries.id === details.id
                      )
                        ? true
                        : false
                    : false
            }
            removeFromWatchlist={(details) =>
                model.removeFromWatchlist(details)
            }
            addToWatchlist={(details) => model.addToWatchlist(details)}
        />
    );
}

export default DetailsPresenter;
