import "./Donate.css";
import PageFrame from "./PageFrame";
import DonationCard from "./DonationCard";

function Donate() {
  return (
    <PageFrame>
      <div className="donationContent">
        <p className="donationDescription">
          We never have and never will charge a cent for attending{" "}
          <strong>1+1</strong>. Help us keep it that way, and throw more
          elaborate dinners, by donating!
        </p>
        <DonationCard />
      </div>
    </PageFrame>
  );
}

export default Donate;
