import { use } from "react";
import {ThemeContext} from ".";
// import { AuthProvider } from "./AuthContext";
// import { UserAuthentication } from "./UserAuthentication";

export const ThemeSwitcherComp = () => {

    const { theme, handleThemeToggle } = use(ThemeContext);

    return (
        <>
            <div
                className={`p-4 h-lvh flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} `}

            >
                <h1>This is a Theme Switcher Toggle</h1>
                <button onClick={handleThemeToggle} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1 rounded-md cursor-pointer">
                    {
                        theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'
                    }
                </button>

                {/* <AuthProvider>
                    <UserAuthentication />
                </AuthProvider> */}
            </div>

        </>
    )
}