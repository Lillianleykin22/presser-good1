import { useState } from 'react';

function CountClicking() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="button_row">
            <button onClick={increment}>לחץ</button>
            <button onClick={reset}>איפוס</button>
            <h2>מספר לחיצות: {count}</h2>
        </div>
    );
}

export default CountClicking;