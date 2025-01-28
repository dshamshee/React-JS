import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {


  return (
    <ul>
      {seriesData.map((element) => {
       return <SeriesCard propElements={element} key={element.id} />
      })}

    </ul>
  );
}
