import React from "react";
import SearchIcon from "../../assets/images/icons/search-icon-white.png"
import classes from "./TopBarSearch.module.css";

const TopBarSearch = () => {
    return (
        <div className={classes.top_search}>
            <input placeholder="Search VisionDirect.co.uk" />
            <button><img src={SearchIcon} alt="Search Icon" /></button>
        </div>
    );
};

export default TopBarSearch;