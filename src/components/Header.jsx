import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <nav className="nav">
        <div className="header">
          <span className="the">THE </span>
          <span className="kissan">
            <b> K</b>ISSAN-MITRA
          </span>
        </div>
        <div className="sign">
          <button className="signin" onClick={handleSignInClick}>
            SIGN IN
          </button>
        </div>
      </nav>
    </>
  );
}
export default Header;
