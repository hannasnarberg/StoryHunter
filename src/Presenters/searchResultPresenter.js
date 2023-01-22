import SeriesSource from '../seriesSource';
import promiseNoData from '../Views/promiseNoData';
import usePromise from '../Custom-hooks/usePromise';
import SearchResultsView from '../Views/searchResultsView';
import { useState, useEffect } from 'react';
import '../CSS/load.css';
import useModelProp from '../Custom-hooks/useModelProp';

function SearchResultPresenter({ model, searchQuery }) {
    const [promise, setPromise] = useState(null);
    const watchlist = useModelProp(model, 'watchlist');
    useEffect(
        function () {
            if (/\S/.test(searchQuery)) {
                setPromise(SeriesSource.searchTvShows(searchQuery));
            }
        },
        [searchQuery]
    );
    const [data, error] = usePromise(promise);
    return (
        promiseNoData('loadSearch', promise, data, error) || (
            <SearchResultsView
                searchResults={data}
                searchQuery={searchQuery}
                setCurrentSeries={(id) => model.setCurrentSeries(id)}
                addToWatchlist={(details) => model.addToWatchlist(details)}
                watchlist={watchlist}
                removeFromWatchlist={(details) =>
                    model.removeFromWatchlist(details)
                }
            />
        )
    );
}
export default SearchResultPresenter;
