import '../CSS/beforeRandom.css';
import '../CSS/button.css';

function BeforeRandomizeView({ onRandomize }) {
    return (
        <div className="container1BeforeRandomize">
            <div className="container2BeforeRandomize">
                <span>
                    <h2>Feeling adventurous? </h2>
                    <h3>Let us randomize a series for you!</h3>
                </span>
                <div className="moveButtonBeforeRandomize">
                    <button className="button" onClick={() => onRandomize()}>
                        Randomize
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BeforeRandomizeView;
