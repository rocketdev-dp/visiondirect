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
                            <li><a href="#">Why choose Vision Direct?</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Delivery information</a></li>
                            <li><a href="#">Returns & refunds policy</a></li>
                            <li><a href="#">Delivery To the US</a></li>
                            <li><a href="#">Vision Direct Coupon Code</a></li>
                            <li><a href="#">Contacts without prescription</a></li>
                            <li><a href="#">Recycle your contact lenses</a></li>
                            <li><a href="#">Help and news</a></li>
                            <li><a href="#">Vision Direct reviews</a></li>
                            
                        </ul>
                    </div>
                    <div className={classes.col_4}>
                        <h4>CONTACT LENS INFO</h4>
                        <ul>
                        <li><a href="#">COVID-19 contact lens safety tips</a></li>
                        <li><a href="#">Cheap contact lenses</a></li>
                        <li><a href="#">Free contact lens trial</a></li>
                        <li><a href="#">Free eye test</a></li>
                        <li><a href="#">How to order contact lenses online</a></li>
                        <li><a href="#">Understanding your prescription</a></li>
                        <li><a href="#">Contact lens base curve & diameter</a></li>
                        <li><a href="#">How to put in contact lenses</a></li>
                        <li><a href="#">How to take out contact lenses</a></li>
                        <li><a href="#">Opticians own brand contact lenses</a></li>
                        
                        </ul>
                    </div>
                    <div className={classes.col_4}>
                        <h4>TOP 10 SELLERS</h4>
                        <ul>
                        <li><a href="#">1 Day Acuvue Moist</a></li>
                        <li><a href="#">Biofinity</a></li>
                        <li><a href="#">Dailies Aquacomfort Plus</a></li>
                        <li><a href="#">Acuvue Oasys</a></li>
                        <li><a href="#">1 Day Acuvue Moist For Astigmatism</a></li>
                        <li><a href="#">Dailies Total 1</a></li>
                        <li><a href="#">Acuvue Oasys 1 Day with Hydraluxe</a></li>
                        <li><a href="#">1 Day Acuvue Trueye</a></li>
                        <li><a href="#">Acuvue Oasys for Astigmatism</a></li>
                        <li><a href="#">Focus Dailies All Day Comfort</a></li>
                      

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
                        <div className={classes.fblock}>
                            UK - <a href="tel:+4402077685000">020 7768 5000</a><br />
                            Mon - Fri: 8:00 to 21:00<br />
                            Sat - Sun: 9:00 to 17:30<br />
                            <br /><br />
                            USA - <a href="tel:+118008700741">1 800 870 0741</a><br />
                            Mon - Fri: 8:00 to 21:00 GMT<br />
                            Sat - Sun: 9:00 to 17:30 GMT<br />
                        </div>
                    </div>
                    <div className={classes.col_4}>
                        <h4>OUR POSTAL ADDRESS</h4>
                        <div className={classes.fblock}>
                        Vision Direct<br />
                        Unit 2 Hudson Court<br />
                        Great North Way, York Business Park<br />
                        Nether Poppleton, YORK, YO26 6RB<br />
                        </div>
                    </div>
                    <div className={classes.col_4}>
                        <h4>EMAIL SUPPORT</h4>
                        <div className={classes.fblock}>
                        Reach out via email on<br />
                        <a href="mailto:help@visiondirect.co.uk">help@visiondirect.co.uk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;