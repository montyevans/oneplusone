import "./PageFrame.css";
import "./Schedule.css";
import PageFrame from "./PageFrame";
import EventCard from "./EventCard";

function Schedule() {
  const events = [
    {
      date: "10/27/24",
      time: "12:00 PM",
      title: "Halloween Sunday Brunch!",
      description: "Spooky season is upon us! [EDIT]",
      signUpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScmRTIUvmrHXCEFl_lVMyHy-gsV1mprHLLvwzi42CcOUMiVyg/viewform?usp=sf_link",
    },
    {
      date: "11/9/24",
      time: "5:30 PM",
      title: "German Evening!",
      description: "German food and wine on a beautiful rooftop!",
      signUpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScmRTIUvmrHXCEFl_lVMyHy-gsV1mprHLLvwzi42CcOUMiVyg/viewform?usp=sf_link",
    },
    {
      date: "11/23/24",
      time: "5:30 PM",
      title: "Friendsgiving!",
      description: "Give me your tired, your poor, your huddled Henriks",
      signUpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScmRTIUvmrHXCEFl_lVMyHy-gsV1mprHLLvwzi42CcOUMiVyg/viewform?usp=sf_link",
    },
  ];

  return (
    <PageFrame>
      <div className="scheduleDescription">
        Sign up for any of the next three dinners; when there are space
        limitations, we generally give preference to guests who RSVPed earlier.
        Submit as late as you’d like, but to be sure we see it, try to submit by
        the end of Wednesday before the relevant dinner!
      </div>
      <div className="eventList">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </PageFrame>
  );
}

export default Schedule;
