import "./PageFrame.css";

import Header from "./Header";
import { useState, useEffect } from "react";

function PageFrame({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pageFrame">
      <Header isMobile={isMobile} />
      <div className="pageContent">{children}</div>
    </div>
  );
}

export default PageFrame;
