import React from 'react';

function ColorfulButton(clr, submitFunction) {
    return (
        <button onClick={submitFunction} style={{backgroundColor: clr}}>{clr}</button>
    );
}

export default ColorfulButton;