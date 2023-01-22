import '../CSS/details.css';
import StarIcon from '../Icons/starIcon';
import CrossIcon from '../Icons/crossIcon';

function DetailsView({
    details,
    inWatchlist,
    addToWatchlist,
    removeFromWatchlist,
}) {
    if (details) {
        return (
            <div className="outerMarginDetails">
                <span
                    className="alignLeftDetails"
                    onClick={() => {
                        window.location.hash = '#home';
                    }}
                >
                    <CrossIcon size={'3x'} />
                </span>
                <div className="contentDetails">
                    <div className="imageBoxDetails">
                        <img
                            src={
                                'https://image.tmdb.org/t/p/w500' +
                                details.poster_path
                            }
                            width="300"
                            alt="poster"
                            className="imageDetails"
                        />
                        <button
                            className="starIconDetails"
                            onClick={() => {
                                inWatchlist
                                    ? removeFromWatchlist(details)
                                    : addToWatchlist(details);
                            }}
                        >
                            <StarIcon
                                class="starIcon"
                                isSolid={inWatchlist}
                                size={'5x'}
                            />
                        </button>
                    </div>
                    <span className="infoDetails">
                        <h1>{details.name}</h1>
                        <div className="factsDetails">
                            <div>
                                <h3> Average vote </h3>
                                {details.vote_average}
                            </div>
                            <div>
                                <h3> Released </h3>
                                {details.first_air_date.substring(0, 4)}
                            </div>
                        </div>
                        <div className="factsDetails">
                            <div>
                                <h3> Genres </h3>
                                {details.genres.map((genre, i, array) =>
                                    i + 1 === array.length ? (
                                        <span key={genre.id}>{genre.name}</span>
                                    ) : (
                                        <span key={genre.id}>
                                            {genre.name + ', '}
                                        </span>
                                    )
                                )}
                            </div>
                            <div>
                                <h3> Seasons </h3>
                                {details.number_of_seasons}
                            </div>
                        </div>
                        <h2>Description</h2>
                        <p>{details.overview}</p>
                    </span>
                </div>
            </div>
        );
    } else return <div />;
}

export default DetailsView;
