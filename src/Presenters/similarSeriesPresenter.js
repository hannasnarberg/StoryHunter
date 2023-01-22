import SeriesSource from '../seriesSource';
import BeforeSimilarView from '../Views/beforeSimilarView';
import AfterSimilarView from '../Views/afterSimilarView';
import promiseNoData from '../Views/promiseNoData';
import usePromise from '../Custom-hooks/usePromise';
import useModelProp from '../Custom-hooks/useModelProp';
import { useState, Fragment } from 'react';

function SimilarSeriesPresenter({ model }) {
    const [promise, setPromise] = useState(null);
    const [data, error] = usePromise(promise);
    const watchlist = useModelProp(model, 'watchlist');
    const [similarIndex, setSimilarIndex] = useState(0);
    const [maxIndex, setMaxindex] = useState(0);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [invalidSearch, setInvalidSearch] = useState(null);
    return (
        <Fragment>
            {!promise && (
                <BeforeSimilarView
                    onText={(value) => setSearchQuery(value)}
                    onFindSimilar={() => {
                        setInvalidSearch(null);
                        if (/\S/.test(searchQuery)) {
                            SeriesSource.searchTvShows(searchQuery).then(
                                (searchResults) => {
                                    if (
                                        searchResults.results.length !== 0 &&
                                        searchResults.results[0].poster_path
                                    ) {
                                        setSearchResult(
                                            searchResults.results[0]
                                        );
                                        setMaxindex(
                                            searchResults.results.length - 1
                                        );
                                        setPromise(
                                            SeriesSource.getSimilar(
                                                searchResults.results[0].id,
                                                1
                                            )
                                        );
                                    } else {
                                        setInvalidSearch(true);
                                        return null;
                                    }
                                }
                            );
                        } else {
                            setInvalidSearch(searchQuery);
                        }
                    }}
                    invalidSearch={invalidSearch}
                />
            )}
            {promise &&
                (promiseNoData('loadSimilar', promise, data, error) ||
                    (!data.results[similarIndex] &&
                        (setPromise(null) || setInvalidSearch(true))) || (
                        <AfterSimilarView
                            setCurrentSeries={(id) =>
                                model.setCurrentSeries(id)
                            }
                            addToWatchlist={(details) =>
                                model.addToWatchlist(details)
                            }
                            inWatchlist={
                                data.results[similarIndex]
                                    ? watchlist.find(
                                          (series) =>
                                              series.id ===
                                              data.results[similarIndex].id
                                      )
                                    : false
                            }
                            removeFromWatchlist={(details) =>
                                model.removeFromWatchlist(details)
                            }
                            onFindNewSimilar={() =>
                                similarIndex < maxIndex
                                    ? setSimilarIndex(similarIndex + 1)
                                    : setSimilarIndex(0)
                            }
                            similarSeries={data.results[similarIndex]}
                            searchResult={searchResult}
                            onGoBack={() => setPromise(null)}
                        />
                    ))}
        </Fragment>
    );
}

export default SimilarSeriesPresenter;
