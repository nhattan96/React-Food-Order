import React, { Fragment } from "react";
import mealsImage from '../../../assets/meals.jpeg'
import classess from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (
        <Fragment>
            <header className={classess.header}>
                <h1>React Meals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classess['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header