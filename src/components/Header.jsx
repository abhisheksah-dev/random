import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <nav className="nav bacground-treanslucent">
        <div className="header bacground-treanslucent">
          <span className="the bacground-treanslucent">THE </span>
          <span className="kissan bacground-treanslucent">
            <b> K</b>ISSAN-MITRA
          </span>
        </div>
        <div className="sign bacground-treanslucent">
          <button
            className="signin bacground-treanslucent"
            onClick={handleSignInClick}
          >
            SIGN IN
          </button>
        </div>
      </nav>
    </>
  );
}
export default Header;
