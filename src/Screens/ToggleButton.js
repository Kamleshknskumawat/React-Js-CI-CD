import React, { useContext } from 'react';
import { ThemeContext } from '../MyThemeContext';

function ToggleButton() {
    const { toggle, count } = useContext(ThemeContext);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={toggle}>Toggle</button>
        </div>
    );

}

export default ToggleButton;