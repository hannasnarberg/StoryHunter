import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import '../CSS/starIcon.css';

function StarIcon(props) {
    return (
        <FontAwesomeIcon
            className={props.class}
            icon={props.isSolid ? fasStar : farStar}
            size={props.size}
        />
    );
}
export default StarIcon;
