import { useState, useEffect } from 'react';
import '../CSS/show.css';

function Show(props) {
    const [hashState, setHash] = useState(window.location.hash);
    useEffect(function () {
        const listener = function () {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', listener); 
        return function () {
            window.removeEventListener('hashchange', listener);
        };
    }, []);
    return (
        <div className={!(hashState === props.hash) ? 'hidden' : ''}>
            {props.children}
        </div>
    );
}

export default Show;
