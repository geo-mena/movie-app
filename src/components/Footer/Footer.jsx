import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Crafted by{" "}
        <a
          href="https://www.linkedin.com/in/geovannimena/"
          target="__blank"
          rel="noreferrer"
        >
          geovannimena
        </a>
        . The source code is on{" "}
        <a href="https://github.com/geo-mena" target="__blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
