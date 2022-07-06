import React from "react";
import classes from "./PostContent.module.css";
import PostImageOne from "../../assets/images/postimageone.jpg";
import PostImageTwo from "../../assets/images/postimagetwo.png";

const PostContent = () => {
    return (
        <div className={classes.post}>
            <div className={classes.col_9}>
                <div className={classes.col_12}>
                    <div className={classes.table_box}>
                        <h3>Vision Direct vs High Street</h3>
                        <table class={classes.table}>
                            <thead>
                            <tr>
                                <td>Product</td>
                                <td>Vision Direct</td>
                                <td> High Street</td>
                                <td>Saving per year*</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a href="#" title="Dailies Total 1">Dailies Total 1</a></td>
                                <td>£22.99</td>
                                <td>£27.50</td>
                                <td>£108.24</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Acuvue Oasys 1 Day">Acuvue Oasys 1 Day</a></td>
                                <td>£21.99</td>
                                <td>£24.00</td>
                                <td>£48.24</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Air Optix HydraGlyde">Air Optix HydraGlyde</a></td>
                                <td>£13.99</td>
                                <td>£35.25</td>
                                <td>£170.08</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Air Optix HydraGlyde Toric">Air Optix HydraGlyde Toric</a></td>
                                <td>£21.99</td>
                                <td>£40.50</td>
                                <td>£148.08</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Acuvue Oasys">Acuvue Oasys</a></td>
                                <td>£19.99</td>
                                <td>£31.50</td>
                                <td>£92.08</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Proclear">Proclear</a></td>
                                <td>£8.99</td>
                                <td>£23.93</td>
                                <td>£119.52</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Proclear Toric">Proclear Toric</a></td>
                                <td>£14.99</td>
                                <td>£34.50</td>
                                <td>£156.08</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Proclear Multifocal">Proclear Multifocal</a></td>
                                <td>£20.99</td>
                                <td>£39.00</td>
                                <td>£144.08</td>
                            </tr>
                            <tr>
                                <td><a href="#" title="Dailies Total 1 Multifocal">Dailies Total 1 Multifocal</a></td>
                                <td>£34.99</td>
                                <td>£37.50</td>
                                <td>£60.24</td>
                            </tr>
                            </tbody>
                        </table>
                        <p>*Savings based on both eyes. For more information please see clause 7.2 of our terms and conditions.</p>
                    </div>
                </div>
                <div className={classes.col_6}>
                    <div className={classes.post_block}>
                        <div className={classes.img_block}>
                            <img src={PostImageOne} alt="Post Two" width="100%" height="291px" />
                        </div>
                        <div className={classes.content_block}>
                            <h4>How to take care of your eyes in summer</h4>
                            <p>Thursday, 30 June 2022</p>
                            <br />
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className={classes.col_6}>
                    <div className={classes.post_block}>
                        <div className={classes.img_block}>
                            <img src={PostImageTwo} alt="Post Two" />
                        </div>
                        <div className={classes.content_block_white}>
                            <h4>How to take care of your eyes in summer</h4>
                            <p>Thursday, 30 June 2022</p>
                            <br />
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.col_3}>
                <div className={classes.info_block}>
                    <h1>Save on contact lenses at VisionDirect.co.uk & get next day delivery</h1>
                    <h3>Faster, easier, cheaper.</h3>
                    <p>Buying contact lenses online is a lot more convenient with VisionDirect.co.uk. As the no.1 rated UK contact lens seller on Trustpilot, we deliver great prices and an award-winning service to thousands of happy customers every week.</p>
                    <p>We offer big savings on popular contact lens brands like Acuvue Moist, Focus Dailies, Air Optix, FreshLook Colorblends and PureVision, with our prices regularly beating the high street. Plus: when you spend £59 and over, you can get free next day delivery, helping you save both time and money.</p>
                    <h4>Need help?</h4>
                    <p>Our customer service team is here to help Monday to Friday 8:00 - 21:00, and Saturday to Sunday 9:00 - 17:30. Call us on 020 7768 5000 in the UK or 1 800 870 0741 in the US and we'll be happy to help.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default PostContent;