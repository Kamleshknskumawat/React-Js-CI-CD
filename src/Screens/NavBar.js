import React, { useContext } from 'react'
import { ThemeContext } from '../MyThemeContext';
function NavBar() {
    const programming = useContext(ThemeContext);

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    console.log(programming)
    return (
        <div className="navbar">

            <nav style={{ background: theme.ui, color: theme.syntax }}>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>


    )
}
export default NavBar;