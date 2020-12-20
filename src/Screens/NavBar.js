import React, { useContext } from 'react'
import { ThemeContext } from '../MyThemeContext';
function NavBar() {
    // const programming = useContext(ThemeContext);



    return (
        <ThemeContext.Consumer>{(ThemeContext) => {
            const { isLightTheme, light, dark } = ThemeContext;
            const theme = isLightTheme ? light : dark;
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
        }}

        </ThemeContext.Consumer>

    )
}
export default NavBar;