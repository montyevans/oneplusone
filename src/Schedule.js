import "./PageFrame.css";
import "./Schedule.css";
import PageFrame from "./PageFrame";
import EventCard from "./EventCard";

import eventsToShowOnSite from "./EventsToShowOnSite";

function Schedule() {
  return (
    <PageFrame>
      <div className="scheduleDescription">
        Sign up for any of the next three dinners; when there are space
        limitations, we generally give preference to guests who RSVPed earlier.
        Submit as late as you’d like, but to be sure we see it, try to submit by
        the end of Wednesday before the relevant dinner!
      </div>
      <div className="eventList">
        {eventsToShowOnSite.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </PageFrame>
  );
}

export default Schedule;
