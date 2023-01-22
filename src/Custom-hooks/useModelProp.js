import { useEffect, useState } from 'react';

function useModelProp(model, property) {
    const [value, setValue] = useState(model[property]);
    useEffect(
        function () {
            //code to be executed at creation
            function obs() {
                setValue(model[property]);
            }
            model.addObserver(obs);
            return function () {
                model.removeObserver(obs); // code to be executed at teardown
            };
        },
        [model, property]
    );
    return value;
}

export default useModelProp;
