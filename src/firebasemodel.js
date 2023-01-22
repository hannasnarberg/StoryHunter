import firebase from 'firebase/compat/app';

function setModel(model, data) {
    try {
        if (data.val()) {
            model.setWatchlist(data.val().watchlist || []);
            model.setCurrentSeries(data.val().currentSeries || null);
        }
    } catch (e) {
        console.log(e);
    }
}

let loadingFromFirebase = false;

function PersistModel(model, user) {
    model.addObserver(function () {
        if (!loadingFromFirebase) {
            firebase.database().ref(user.uid).set({
                watchlist: model.watchlist,
                currentSeries: model.currentSeries,
            });
        }
    });
    firebase
        .database()
        .ref(user.uid)
        .on('value', function (data) {
            loadingFromFirebase = true;
            setModel(model, data);
            loadingFromFirebase = false;
        });
}

function FetchModel(model, user, callback) {
    firebase
        .database()
        .ref(user.uid)
        .once('value', function (data) {
            loadingFromFirebase = true;
            setModel(model, data);
            loadingFromFirebase = false;
            callback();
        });
}

export { PersistModel, FetchModel };
