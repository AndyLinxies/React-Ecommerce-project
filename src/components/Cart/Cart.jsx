import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styleCart'
import CartItem from './CartItem/CartItem'

import {Link} from 'react-router-dom';

const Cart = ({ cart, updateQt, removefromCart, emptyCart }) => {
    //line_items renvoie un Array 
    console.log(cart.line_item_id +' Ma cadie');

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>No item in the Shopping Cart,
        <Link to='/' className={classes.link}>
        add something
        </Link>
        </Typography>
    );
    //S'il y a qqch dans la cadie il les montre. Il faut donc aller chercher les items
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    {/* On fait un boucle sur tous les items en suite on les Passe en props pour pouvoir les utiliser ds CartItem.jsx
                    */}
                        {/* On passe le update et remove en props ici */}
                        <CartItem item={item} onUpdateQt={updateQt} onRemovefromCart={removefromCart}
                        cart={cart}/>
                    </Grid>
                ))};
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        {/* subtotal vient de cart, de commerce js, il calcule automatique le prix total */}
                        Subtotal: {cart.subtotal.formatted_with_code}
                    </Typography>
                </div>
                <div className="boutonsbas">
                    <Button className={classes.emptyButton} size="large" type='button' variant='contained' color='secondary' onClick={emptyCart}>
                    Empty your Cart
                    </Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
                {/* </Grid> */}
                {/* ))} */}
            </Grid>
        </>
    );
    //Pour eviter le message d'erreur quand le fetch de commerce js n'a pas encore été fait

    if (!cart.line_items) return 'Loading...'


    return (
        <div>
            <Container>
                <div className={classes.toolbar}>
                    <Typography className={classes.title} variant='h3' gutterBottom>Your ShoppingCart</Typography>
                    {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
                </div>
            </Container>
        </div>
    );
};

export default Cart;