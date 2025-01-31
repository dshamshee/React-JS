import {NetflixSeries} from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css";
import "./components/Netflix.module.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">Lists of Best Netflix Series</h1>
    <NetflixSeries />
  </section>
  )
  
  // return <Profile />

}

