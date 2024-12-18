import "./PageFrame.css";

import Header from "./Header";

function PageFrame({ children }) {
  return (
    <div className="pageFrame">
      <Header />
      <div className="pageContent">{children}</div>
    </div>
  );
}

export default PageFrame;
