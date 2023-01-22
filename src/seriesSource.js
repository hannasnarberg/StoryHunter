import { API_KEY, BASE_URL } from './apiConfig';

const SeriesSource = {
    apiCall(method, params) {
        return (
            fetch(BASE_URL + method + 'api_key=' + API_KEY + '&' + params)
                .then((response) => {
                    if (response.ok) {
                        return response;
                    } else {
                        throw new Error(response.statusText);
                    }
                })
                .then((response) => response.json())
        );
    },

    searchTvShows(query) {
        return SeriesSource.apiCall(
            'search/tv?',
            'language=en-US&page=1&query=' + query
        ).then((data) => data);
    },

    getPopularTvShows(pagenr) {
        return SeriesSource.apiCall(
            'tv/popular?',
            'language=en-US&page=' + pagenr
        ).then((data) => data);
    },

    getSeriesDetails(id) {
        return SeriesSource.apiCall('tv/' + id + '?', 'language=en-US').then(
            (data) => data
        );
    },

    getTopRated(pagenr) {
        return SeriesSource.apiCall(
            'tv/top_rated?',
            'language=en-US&page=' + pagenr
        ).then((data) => data);
    },

    getSimilar(id, pagenr) {
        return SeriesSource.apiCall(
            'tv/' + id + '/similar?',
            'language=en-US&page=' + pagenr
        ).then((data) => data);
    },
};

export default SeriesSource;
