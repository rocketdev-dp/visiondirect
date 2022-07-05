import React, { Fragment } from "react";
import classes from "./EyeCareCentre.module.css";

const EyeCareCentre = () => {
    return (
        <Fragment>
        <div className={classes.eyecarecentre}>
            <h1>Eye Care Centre</h1>
            <p>Visit the Vision Direct Eye Care Centre for advice on caring for and wearing contact lenses, taking care of your eyes and enjoying healthy vision. Learn about eye tests, prescriptions and how to enjoy all-day comfort, clear vision, and optimum eye health.</p>
            <br />
            <br />
            <div className={classes.col_4}>
                <div className={classes.card}>
                <h4>Types of contact lenses</h4>
                <p>Learn about the different types of contact lens and which one is right for you in our dedicated guide.</p>
                </div>
            </div>
            <div className={classes.col_4}>
            <div className={classes.card}>
                <h4>Coloured contact lenses</h4>
                <p>Everything you need to know about contact lenses, with information on how to care for all types.</p>
                </div>
            </div>
            <div className={classes.col_4}>
            <div className={classes.card}>
                <h4>Buying contact lenses online</h4>
                <p>If you're new to Vision Direct, our simple guide shows you just how easy it is to buy contact lenses online.. </p>
                </div>
            </div>
        </div>
        <div className={classes.buycontact}> 
            <h1>Buy contact lenses online</h1>
            <p>Vision Direct is the fastest, easiest and cheapest way to buy contact lenses online. Ordering contact lenses with us is a hassle-free process and takes just 2 minutes. Repeat ordering is even quicker for contact lens wearers, with our superfast 3-click reorders. When you buy contact lenses online from Vision Direct you'll save money without compromising on quality. We stock the same contacts as high street opticians and retailers, without lengthy queues. Plus, we offer our customers lower prices and better service. With our dedicated Monday to Friday 8:00 - 21:00, and Saturday to Sunday 9:00 - 17:30 customer service, if you ever need help, we're ready to assist.</p>
        </div>
        </Fragment>
    )
};

export default EyeCareCentre;