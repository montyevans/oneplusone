import "./PageFrame.css";
import "./Home.css";
import PageFrame from "./PageFrame";
import annieImg from "./assets/annie.png"; // Move image to src/assets

function Home() {
  return (
    <PageFrame>
      <p className="introParagraph">
        Since October 2021, <strong>1+1</strong> has been a dinner party hosted
        every two weeks by your hosts: Annie, Henrik, and Cormac. Bring a
        friend, an enemy, or anyone in between!
      </p>
      <div className="hosts">
        <img
          src="https://i.ytimg.com/vi/OR3HqWiNeFg/maxresdefault.jpg"
          alt="Henrik"
        ></img>
        <img src={annieImg} alt="Annie"></img>
        <img
          src="https://lh4.googleusercontent.com/proxy/3qAG1n-FSh8eTm0zrYRaX0oc0JhBEE5ANGpjZZ9j9oWDxGNvHw0mGZ2GXUo5fH_3oNeiVJY9hVjfCFbM-5kpEK7nYP9WAqkkfQH-0PNwpUTlai9b0zxt92WGCVz8QrLk4wiZe_DC0eUniWQpQzZ94xHjnQFMK2qIkvurDUirLQJQ-78BKG77QSA"
          alt="Cormac"
        ></img>
      </div>
    </PageFrame>
  );
}

export default Home;
