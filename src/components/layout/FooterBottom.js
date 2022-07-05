import React from "react";
import classes from "./FooterBottom.module.css";
import FooterLogo from "../../assets/images/footer-logo.png";
import Paypal from "../../assets/images/paypal.png";
import Maestro from "../../assets/images/maestro.png";
import MasterCard from "../../assets/images/mastercard.png";
import Visa from "../../assets/images/visa.png";
import AmericanExpress from "../../assets/images/american_express.png";

const FooterBottom = () => {
    return (
        <div className={classes.footer_bottom}>
            <div className={classes.container_inner}>
                <div className={classes.footer_sec_one}>
                    <div className={classes.col_4}>
                        <img className={classes.footer_logo} src={FooterLogo} alt="Footer Logo." />
                    </div>
                    <div className={classes.col_4}>
                        <h4>VISIONDIRECT INFO</h4>
                        <ul>
                            <li>Why choose Vision Direct?</li>
                            <li>Contact us</li>
                            <li>Delivery information</li>
                            <li>Returns & refunds policy</li>
                        </ul>
                    </div>
                    <div className={classes.col_4}>
                        <h4>CONTACT LENS INFO</h4>
                        <ul>
                            <li>Why choose Vision Direct?</li>
                            <li>Contact us</li>
                            <li>Delivery information</li>
                            <li>Returns & refunds policy</li>
                        </ul>
                    </div>
                    <div className={classes.col_4}>
                        <h4>TOP 10 SELLERS</h4>
                        <ul>
                            <li>Why choose Vision Direct?</li>
                            <li>Contact us</li>
                            <li>Delivery information</li>
                            <li>Returns & refunds policy</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.footer_sec_two}>
                    <div className={classes.col_4}>
                        <h4>WE ACCEPT</h4>
                        <ul className={classes.list_payment}>
                            <li><img src={Visa} alt="Visa" /></li>
                            <li><img src={MasterCard} alt="Master Card" /></li>
                            <li><img src={Maestro} alt="Maestro" /></li>
                            <li><img src={Paypal} alt="Paypal" /></li>
                            <li><img src={AmericanExpress} alt="American Express" /></li>
                        </ul>
                    </div>
                    <div className={classes.col_4}>
                        <h4>PHONE SUPPORT</h4>
                        <div>
                            UK - 020 7768 5000<br />
                            Mon - Fri: 8:00 to 21:00<br />
                            Sat - Sun: 9:00 to 17:30<br />
                            <br /><br />
                            USA - 1 800 870 0741<br />
                            Mon - Fri: 8:00 to 21:00 GMT<br />
                            Sat - Sun: 9:00 to 17:30 GMT<br />
                        </div>
                    </div>
                    <div className={classes.col_4}>
                        <h4>OUR POSTAL ADDRESS</h4>
                        <div>
                        Vision Direct<br />
                        Unit 2 Hudson Court<br />
                        Great North Way, York Business Park<br />
                        Nether Poppleton, YORK, YO26 6RB<br />
                        </div>
                    </div>
                    <div className={classes.col_4}>
                        <h4>EMAIL SUPPORT</h4>
                        <div>
                        Reach out via email on<br />
                        help@visiondirect.co.uk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;