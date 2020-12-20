import React, { Component, createContext, useState } from 'react'
export const ThemeContext = createContext();

const MyThemeContext = (props) => {
    // const [programming, setProgramming] = useState([
    //     { title: 'Java', author: 'kamlesh', id: 1 },
    //     { title: 'React', author: 'Kamleshaaa', id: 2 },
    // ]);

    const [programming, setProgramming] = useState(
        { isLightTheme: true, light: { syntax: "#555", ui: "#ddd", bg: "#eee" }, dark: { syntax: "#ddd", ui: "#333", bg: "#555" } }


    );
    return (
        <ThemeContext.Provider value={{ ...programming }}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export default MyThemeContext;