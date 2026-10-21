import { useState } from 'react';

function SimpleHomePage(props) {
    const [toShow, setToShow] = useState(true);

    const show = () => {
        setToShow(true);
    }
    const toggle = () => {
        setToShow(!toShow);
    }
    const hide = () => {
        setToShow(false);
    }

    return (
        <>
            <div className="button_row">
            <button onClick={show}>show</button>
            <button onClick={toggle}>toggle</button>
            <button onClick={hide}>hide</button>
            </div>
            {toShow &&
                <h1>Hello World</h1>}
        </>
    );
}

export default SimpleHomePage;