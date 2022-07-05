import React from "react";
import Logo from "../../assets/images/logo.png";
import TopBarSearch from "../UI/TopBarSearch";
import PhoneIcon from "../../assets/images/icons/phone-icon-black.png";
import classes from "./TopBar.module.css";

const TopBar = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <TopBarSearch />
            <div className={classes.top_contact}>
                <span>
                    <img src={PhoneIcon} alt="Phone Icon" />020 7768 5000
                </span>
            </div>
        </div>
    );
};

export default TopBar;