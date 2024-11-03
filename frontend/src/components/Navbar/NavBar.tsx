import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Label from "../Label/Label";
import Logo from "../Logo/Logo";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="LogoMenu">
        <Logo label="banquee." size="medium" appearence="secondary" />
      </div>
      <div className="CenterMenu">
        <Label label="Features" size="medium" appearence="primary" />
        <Label label="Compare" size="medium" appearence="primary" />
        <Label label="Support" size="medium" appearence="primary" />
        <Label label="Blog" size="medium" appearence="primary" />
      </div>
      <div className="account-menu">
        <Label label="Login" size="medium" appearence="secondary" />
        <BasicButton label="Open Account" size="small" appearence="secondary" />
      </div>
    </div>
  );
}

export default NavBar;
