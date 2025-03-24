import { use } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    const handleToggleTheme = () => {
        return setTheme((prevtheme) => (prevtheme === 'dark' ? 'light' : 'dark'))
    }

    return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>
}


export const DArkLight = () => {

    const {theme, handleToggleTheme} = use(ThemeContext);


    return (
        <div className={` p-4 h-lvh flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} 
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'} `}>
            <h1 className="text-xl">Dark Light Mode Website</h1>
            <p className="text-lg">Hello, My React v19 fans</p>
            <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4" onClick={handleToggleTheme}>{theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}</button>
        </div>
    )
}