import { useNavigate, NavLink, useRouteError } from "react-router-dom"

export const NotFound = ()=>{
    const error = useRouteError();
    const navigate = useNavigate()

    const handleGoBack = ()=>{
        navigate(-1)
    }

    if(error.status === 404){
        return (
            <section className="error-section">
                <div is="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                    </figure>

                    <div className="text-center">
                        <p className="p-a">
                            . The page you were looking for cloud not found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                </div>

                <NavLink to="/" className={"btn"}>Go Back To Home Page</NavLink>
                {/* <button className="btn" onClick={handleGoBack}>Go Back</button> */}

            </section>
        )
    }

    console.log(error)

    return <h1>The page you are looking does not exist</h1>
}