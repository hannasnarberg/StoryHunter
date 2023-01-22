import usePromise from '../Custom-hooks/usePromise';
import SeriesSource from '../seriesSource';
import promiseNoData from '../Views/promiseNoData';
import { useEffect, useState, Fragment } from 'react';
import OverviewView from '../Views/overviewView';
import useModelProp from '../Custom-hooks/useModelProp';
import '../CSS/load.css';

function OverviewPresenter({ model }) {
    const [promiseTrending, setPromiseTrending] = useState(null);
    const [promiseTopRated, setPromiseTopRated] = useState(null);
    useEffect(function () {
        setPromiseTrending(SeriesSource.getPopularTvShows(1));
        setPromiseTopRated(SeriesSource.getTopRated(1));
    }, []);
    const [dataTrending, errorTrending] = usePromise(promiseTrending);
    const [dataTopRated, errorTopRated] = usePromise(promiseTopRated);
    const watchlist = useModelProp(model, 'watchlist');
    const [filter, setFilter] = useState('trending');
    return (
        promiseNoData(
            'loadOverview',
            promiseTrending,
            dataTrending,
            errorTrending
        ) ||
        promiseNoData(
            'loadOverview',
            promiseTopRated,
            dataTopRated,
            errorTopRated
        ) || (
            <Fragment>
                <OverviewView
                    setCurrentSeries={(id) => model.setCurrentSeries(id)}
                    data={filter === 'trending' ? dataTrending : dataTopRated}
                    addToWatchlist={(details) => model.addToWatchlist(details)}
                    watchlist={watchlist}
                    removeFromWatchlist={(details) =>
                        model.removeFromWatchlist(details)
                    }
                    changeFilter={(chosenFilter) => {
                        setFilter(chosenFilter);
                    }}
                    filter={filter}
                />
            </Fragment>
        )
    );
}

export default OverviewPresenter;
