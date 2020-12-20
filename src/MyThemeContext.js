import React, { createContext, useState } from 'react'
export const ThemeContext = createContext();

const MyThemeContext = (props) => {

    const [programming, setProgramming] = useState(
        { isLightTheme: true, light: { syntax: "#555", ui: "#ddd", bg: "#eee" }, dark: { syntax: "#ddd", ui: "#333", bg: "#555" } }


    );
    const toggle = () => {
        console.log("programming toggle clicked ");
        //setProgramming({ isLightTheme: false, light: { syntax: "#555", ui: "#ddd", bg: "#eee" }, dark: { syntax: "#ddd", ui: "#333", bg: "#555" }});

        setProgramming({ ...programming, isLightTheme: !programming.isLightTheme });

        // setCount(count + 1);
        console.log(programming);
    }
    return (
        <ThemeContext.Provider value={{ ...programming, toggle }}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export default MyThemeContext;