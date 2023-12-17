import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Rating.css";

const Rating = ({ rating }) => {
  return (
    <div className="rating-circle">
      <CircularProgressbar
        value={rating * 10}
        text={`${rating}`}
        styles={buildStyles({
          pathColor: rating <= 5 ? "red" : rating <= 7 ? "yellow" : "green",
          textColor: "black",
          textSize: "2rem",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default Rating;
