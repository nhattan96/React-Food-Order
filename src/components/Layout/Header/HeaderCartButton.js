import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../../store/cart-context'
import CartIcon from '../../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasess = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}  `

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }

        setBtnIsHighlighted(true)

        setTimeout(() => {
            setBtnIsHighlighted(false)
        },300)

    }, [cartCtx.items])

    return (
        <button className={btnClasess} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}


export default HeaderCartButton