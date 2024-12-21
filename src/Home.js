import "./PageFrame.css";
import "./Home.css";
import PageFrame from "./PageFrame";
import annieImg from "./assets/annie.png"; // Move image to src/assets
import cormacImg from "./assets/cormac.jpg"; // Move image to src/assets
import henrikImg from "./assets/henrik.jpg"; // Move image to src/assets

function Home() {
  return (
    <PageFrame>
      <div className="introContent">
        <p className="introParagraph">
          Since October 2021, <strong>1+1</strong> has been a dinner party
          hosted every two weeks by your hosts: Annie, Henrik, and Cormac. Bring
          a friend, an enemy, or anyone in between!
        </p>
        <div className="hosts">
          <img src={henrikImg} alt="Henrik"></img>
          <img src={annieImg} alt="Annie"></img>
          <img src={cormacImg} alt="Cormac"></img>
        </div>
      </div>
    </PageFrame>
  );
}

export default Home;
