import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as fasStar } from '@fortawesome/free-solid-svg-icons';
import '../CSS/searchIcon.css';

function SearchIcon({ size }) {
    return (
        <FontAwesomeIcon className="searchIcon" icon={fasStar} size={size} />
    );
}
export default SearchIcon;
