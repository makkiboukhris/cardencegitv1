import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link, NavLink, withRouter } from "react-router-dom";


function Header() {
  const [responsive, setResponsive] = useState(false);
  return (
      <div>
        <button
          className={
            responsive ? "icon responsive" : "icon"
          }
          onClick={() => {
            setResponsive(!responsive);
          }}
        >
          <MenuIcon />
        </button>
        <div
          className={
            responsive ? "header_container responsive" : "header_container"
          }
        >
          <Link to="/" className="Link">Home</Link>
          <Link to="/salespage" className="Link">Sale</Link>
          <Link className="Link">Join sale</Link>
          <Link className="Link">Create sale</Link>
          <Link className="Link">Claim tokens</Link>
          <Link className="Link">Manage sale</Link>
          <Link className="header_connectBtn">connect</Link>
        </div>
      </div>
  );
}

export default Header;
