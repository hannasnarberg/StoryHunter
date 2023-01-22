import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../CSS/crossIcon.css';

function CrossIcon({ size }) {
    return <FontAwesomeIcon className="crossIcon" icon={faTimes} size={size} />;
}
export default CrossIcon;
