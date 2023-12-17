import "./Rating.css";

const Rating = ({ rating }) => {
  let borderColor;

  if (rating <= 5) {
    borderColor = "red";
  } else if (rating <= 7) {
    borderColor = "yellow";
  } else {
    borderColor = "green";
  }

  return (
    <div className="rating-circle" style={{ borderColor }}>
      {rating}
    </div>
  );
};

export default Rating;
