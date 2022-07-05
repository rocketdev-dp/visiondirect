import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.content}>
                <h3>DISCOVER NEW <br />EVERCLEAR ACTIVE</h3>
                <p>Daily lenses for active lifestyles</p>
                <button>Learn more</button>
            </div>
        </div>
    );
};

export default Banner;