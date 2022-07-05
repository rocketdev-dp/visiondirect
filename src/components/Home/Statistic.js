import React from "react";
import classes from "./Statistic.module.css";
import Bowel from "../../assets/images/free-replacement-lenses.png";
import Garantee from "../../assets/images/100-day-guarantee.png";
import Delivery from "../../assets/images/next-day-delivery.png";
import Trust from "../../assets/images/trustpilot.png";

const Statistic = () => {
    return (
        <div className={classes.row}>
            <div className={classes.container_inner}>
                <div className={classes.col_4}><img src={Bowel} alt="Free Replacement" /> <h4>Up to 45% cheaper</h4></div>
                <div className={classes.col_4}><img src={Garantee} alt="Garantee" /> <h4>365-day guarantee</h4></div>
                <div className={classes.col_4}><img src={Delivery} alt="Delivery" /> <h4>Next day delivery</h4></div>
                <div className={classes.col_4}><img src={Trust} alt="Rated Excellent" /> <h4>Rated Excellent</h4></div>
            </div>
        </div>
    );
};

export default Statistic;