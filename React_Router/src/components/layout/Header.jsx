import { NavLink } from "react-router-dom"

export const Header = () => {

    const getNavLInkStyle = ({isActive})=>{
        return{
            color: isActive ? "blue" : "black"
        }
    }

    const getNavlinkClass = ({isActive}) =>{
        return isActive ? "nav-link active" : "nav-link"
    } 


    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>get Danish Membership, 30 day return or refund guarantee</p>
                        </div>
                        <div className="sign_in_up">
                            <NavLink to="">SIGN IN</NavLink>
                            <NavLink to="">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index">
                            <p>DFlix</p>
                        </NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                {/* active is a CSS class */}
                                    Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" style={({isActive})=>{
                                    return{
                                        color: isActive ? "blue" : "black"
                                    }
                                }}>
                                About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link" style={getNavLInkStyle}>
                                Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={getNavlinkClass}>
                                contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}