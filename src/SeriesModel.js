import SeriesSource from './seriesSource';

class SeriesModel {
    constructor(watchlist = [], currentSeries = '', observers = []) {
        this.observers = observers;
        this.watchlist = watchlist;
        this.currentSeries = currentSeries;
    }

    addToWatchlist(series) {
        this.watchlist = [series, ...this.watchlist];
        this.notifyObservers();
    }

    removeFromWatchlist(series) {
        this.watchlist = this.watchlist.filter((show) => show.id !== series.id);
        this.notifyObservers();
    }

    emptyWatchlist() {
        this.watchlist = [];
    }

    setWatchlist(watchlist) {
        this.watchlist = [...watchlist];
        this.notifyObservers();
    }

    setCurrentSeries(id) {
        if (id === this.currentSeries) return;
        else this.currentSeries = id;

        this.currentSeriesDetails = null;
        this.currentSeriesError = null;
        this.notifyObservers();
        if (this.currentSeries) {
            SeriesSource.getSeriesDetails(id)
                .then((data) => {
                    if (id === this.currentSeries) {
                        this.currentSeriesDetails = data;
                        this.notifyObservers();
                    }
                })
                .catch((error) => {
                    if (id === this.currentSeries) {
                        this.currentSeriesError = error;
                        this.notifyObservers();
                    }
                });
        }
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(
            (observer) => observer !== callback
        );
    }

    removeAllObservers() {
        this.observers = [];
    }

    notifyObservers() {
        this.observers.forEach((callback) => {
            try {
                callback();
            } catch (error) {
                console.log(error);
            }
        });
    }
}

export default SeriesModel;
