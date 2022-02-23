import React from "react";

import classes from "./Header.module.css"
import image from '../../assets/meals.jpg'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Pappito Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']} >
                <img src={image} alt="Table full of delicious meals"/>
            </div>
        </React.Fragment>
    )
}

export default Header;