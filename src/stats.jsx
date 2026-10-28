import './stats.css';
import { useState } from 'react';

function Stats(props) {
    const [color, setColor] = useState('');
    const [counts, setCounts] = useState({ red: 0, green: 0, blue: 0 });

    function handleClick(newColor) {
        setColor(newColor);
        setCounts({ ...counts, [newColor]: counts[newColor] + 1 });
    }

    return (
        <div className="stats">
            <div id={`stat-${props.id}`} className={`stat-box ${color}`}></div>
            <div>
                <button onClick={() => handleClick('red')}>red ({counts.red})</button>
                <button onClick={() => handleClick('green')}>green ({counts.green})</button>
                <button onClick={() => handleClick('blue')}>blue ({counts.blue})</button>
            </div>
        </div>
    );
}

export default Stats;
