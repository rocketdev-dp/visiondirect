import classes from "./TrustPilot.module.css";
import TrustLogo from "../../assets/images/trustpilot-logo.png";
import Ratings from "../../assets/images/rating.png";

const TrustPilot = () => {
    return (
        <div className={classes.trustpilot}>
            <div className={classes.title_bar}>
                <img src={TrustLogo} alt="Trust Logo" width="200px" /><br />
                <h1>Customer Reviews</h1><p>Rated 4.8 / 5 by 89,818 Customers</p><br />
            </div>
            <div className={classes.list_testimonial}>
                <div className={classes.col_4}>
                    <div className={classes.card}>
                        <img src={Ratings} alt="Rating" /><br />
                        <strong>Quick and easy ordering service and international delivery!</strong><br />
                        <p>Isobel, 9 May 2022</p>
                    </div>
                </div>
                <div className={classes.col_4}>
                    <div className={classes.card}>
                        <img src={Ratings} alt="Rating" /><br />
                        <strong>Amazing service! I can’t believe how quick it is. And products are also 5 stars.</strong><br />
                        <p>Liliana, 5 May 2022</p>
                    </div>
                </div>
                <div className={classes.col_4}>
                    <div className={classes.card}>
                        <img src={Ratings} alt="Rating" /><br />
                        <strong>Simple, convenient & cheaper than the standard boots monthly subscription.</strong><br />
                        <p>SG, 2 May 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustPilot;