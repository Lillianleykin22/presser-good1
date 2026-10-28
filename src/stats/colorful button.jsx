import React from 'react';

function ColorfulButton(clr, submitFunction) {
    return (
        <button onClick={submitFunction}> ({clr})</button>
    );
}

export default ColorfulButton;