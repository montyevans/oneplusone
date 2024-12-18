import "./EventCard.css";

function EventCard({ date, time, title, description, signUpLink }) {
  return (
    <div className="eventCard">
      <span>{date}</span>
      <span>{time}</span>
      <span>{title}</span>
      <span>{description}</span>
      <a href={signUpLink}>Sign up</a>
    </div>
  );
}

export default EventCard;
