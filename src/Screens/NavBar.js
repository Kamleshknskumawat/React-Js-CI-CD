import React from 'react'
import { AuthContext } from '../AuthContextProvider';
import { ThemeContext } from '../MyThemeContext';
function NavBar() {
    return (
        <AuthContext.Consumer>{(AuthContext) => (
            <ThemeContext.Consumer>{(ThemeContext) => {
                const { isAuthenticated, toggleAuth } = AuthContext;
                console.log("------------------------dsdadasdas---------------");
                const { isLightTheme, light, dark } = ThemeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="navbar">

                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Hi TODO</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'HomePage' : 'Login '}
                            </div>
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

        )}</AuthContext.Consumer>


    )
}
export default NavBar;