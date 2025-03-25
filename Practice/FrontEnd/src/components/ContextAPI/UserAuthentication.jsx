import { use } from "react";
import { Authcontext } from "./AuthContext";
import { ThemeContext } from ".";

export const UserAuthentication = () => {

    const { isLoggedin, handleAuthToggle } = use(Authcontext);
    const { theme, handleThemeToggle } = use(ThemeContext);

    return (
        <>
            <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme=== 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} `}>

                <h1 className="text-xl font-bold">
                    {
                        !isLoggedin ? 'Please Login' : 'Welcome Back Danish'
                    }
                </h1>
                <button
                    onClick={handleAuthToggle}
                    className="text-lg bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-1 mt-2 font-semibold text-white cursor-pointer "
                >
                    {
                        !isLoggedin ? 'Login' : 'Logout'
                    }
                </button>

                <div className="themeContexttt">
                    <button onClick={handleThemeToggle} className="cursor-pointer font-semibold">
                        {
                            theme === 'light' ? 'Dark Mode' : 'Light Mode'
                        }
                    </button>
                </div>
            </div>
        </>
    )
}