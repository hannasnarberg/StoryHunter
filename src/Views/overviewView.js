import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/overview.css';
import StarIcon from '../Icons/starIcon';

function OverviewView({
    data,
    watchlist,
    setCurrentSeries,
    removeFromWatchlist,
    addToWatchlist,
    changeFilter,
    filter,
}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    infinite: true,
                    speed: 600,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1210,
                settings: {
                    infinite: true,
                    speed: 600,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    infinite: true,
                    speed: 600,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };
    return (
        <div className="content">
            <span className="filterChoicesContainer">
                <button
                    className={
                        filter === 'trending'
                            ? 'filterChosen'
                            : 'filterNotChosen'
                    }
                    onClick={() => changeFilter('trending')}
                >
                    <span className="filterTitles">Trending</span>
                </button>
                <button
                    className={
                        filter === 'topRated'
                            ? 'filterChosen'
                            : 'filterNotChosen'
                    }
                    onClick={() => changeFilter('topRated')}
                >
                    <span className="filterTitles">Top Rated</span>
                </button>
            </span>
            <Slider {...settings} className="slick">
                {data.results
                    .filter((result) => (result.poster_path ? true : false))
                    .map((result) => (
                        <div key={result.id} className="box">
                            <img
                                className="img"
                                alt="Poster"
                                src={
                                    'https://image.tmdb.org/t/p/original' +
                                    result.poster_path
                                }
                                height="170"
                                onClick={() => {
                                    setCurrentSeries(result.id);
                                    window.location.hash = '#details';
                                }}
                            ></img>
                            <button
                                className="starButton"
                                onClick={() => {
                                    watchlist.find(
                                        (series) => series.id === result.id
                                    )
                                        ? removeFromWatchlist(result)
                                        : addToWatchlist(result);
                                }}
                            >
                                <StarIcon
                                    isSolid={watchlist.find(
                                        (series) => series.id === result.id
                                    )}
                                    size={'2x'}
                                    class="starIcon"
                                />
                            </button>
                        </div>
                    ))}
            </Slider>
        </div>
    );
}
export default OverviewView;
