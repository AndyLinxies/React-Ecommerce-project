import React from 'react';
import useStyles from './checkoutStyle';
const Checkout = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.thanks}>Thank You for Your Order. It's Arriving soon at your Place !</h1>
        </div>
    );
};

export default Checkout;