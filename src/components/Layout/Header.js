import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css"
import image from '../../assets/meals.jpg' //Way to import image
const Header = (props) => { //Returning Header of the app built in 2 parts
    return (
        <React.Fragment>
            <header className={classes.header}>  {/* First part that holds name of the app and button for the cart*/}
                <h1>Pappito Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']} > {/*Second part, that hold the header image, and CSS class is called like this because it has dash between words*/}
                <img src={image} alt="Table full of delicious meals"/>
            </div>
        </React.Fragment>
    )
}

export default Header;