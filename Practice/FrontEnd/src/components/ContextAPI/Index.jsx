import { use, useContext, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    const handleThemeToggle = () => {
        return setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }


    return <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
        {children}
    </ThemeContext.Provider>
}

// export const useThemeContext = () => {
//     const context = useContext(ThemeContext)
//     return context;
// }

