import SeriesSource from '../seriesSource';
import BeforeRandomizeView from '../Views/beforeRandomizeView';
import AfterRandomizeView from '../Views/afterRandomizeView';
import promiseNoData from '../Views/promiseNoData';
import usePromise from '../Custom-hooks/usePromise';
import useModelProp from '../Custom-hooks/useModelProp';
import { useState, Fragment } from 'react';
import '../CSS/load.css';

function RandomizePresenter({ model }) {
    const [promise, setPromise] = useState(null);
    const [data, error] = usePromise(promise);
    const watchlist = useModelProp(model, 'watchlist');
    return (
        <Fragment>
            {!promise && (
                <BeforeRandomizeView
                    onRandomize={() =>
                        setPromise(
                            SeriesSource.getPopularTvShows(
                                Math.floor(Math.random() * 40 + 1)
                            ).then(
                                (randomSeries) =>
                                    randomSeries.results[
                                        Math.floor(Math.random() * 20)
                                    ]
                            )
                        )
                    }
                />
            )}
            {promise &&
                (promiseNoData('loadRandom', promise, data, error) || (
                    <AfterRandomizeView
                        setCurrentSeries={(id) => model.setCurrentSeries(id)}
                        addToWatchlist={(details) =>
                            model.addToWatchlist(details)
                        }
                        inWatchlist={
                            watchlist.find(
                                (watchListSeries) =>
                                    watchListSeries.id === data.id
                            )
                                ? true
                                : false
                        }
                        removeFromWatchlist={(details) =>
                            model.removeFromWatchlist(details)
                        }
                        onRandomize={() =>
                            setPromise(
                                SeriesSource.getPopularTvShows(
                                    Math.floor(Math.random() * 40 + 1)
                                ).then(
                                    (randomSeries) =>
                                        randomSeries.results[
                                            Math.floor(Math.random() * 20)
                                        ]
                                )
                            )
                        }
                        randomSeries={data}
                        onGoBack={() => setPromise(null)}
                    />
                ))}
        </Fragment>
    );
}

export default RandomizePresenter;
