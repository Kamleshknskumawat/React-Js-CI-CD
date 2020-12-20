import React, { Component, useContext } from 'react'
import { ThemeContext } from '../MyThemeContext';
function ProgrammingList() {

    // console.log(programming);
    const { isLightTheme, light, dark, toggle } = useContext(ThemeContext);

    console.log("--------- Start ---------------------");
    console.log(isLightTheme);
    console.log(light);
    console.log(dark);
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    return (

        // <div className="pl" >
        //     <h1>Kamleshknskumawat</h1>
        // </div>
        <div className="pl" style={{ color: theme.syntax, background: theme.bg }}>

            <h1>Programming List</h1>
            <ul>
                <li style={{ background: theme.ui }}>Java</li>
                <li style={{ background: theme.ui }}>Python</li>
                <li style={{ background: theme.ui }}>React</li>
                <li style={{ background: theme.ui }}>React Native</li>
            </ul>
            <hr />
            {/* <button onClick={toggle}>Toogle</button> */}

        </div>
    )

}
export default ProgrammingList;