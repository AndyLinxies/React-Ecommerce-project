import React from 'react';
import { Typography, Button, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';
import useStyles from './styleCartItem'

const CartItem = ({ cart, item, onUpdateQt, onRemovefromCart }) => {
    const classes = useStyles();
    // essai
    // const [updateMoiCa,setUpdateMoiCa]= React.useState('');
    // function oclick(){
    //     setUpdateMoiCa
    // }
    // fin essai

    //
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateQt(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemovefromCart(lineItemId);

    return (
        <div>
            <Card className="cart-item">
                {/* pour limage */}
                <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                {/* Pour le contenu */}
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                {/* pour la zone des boutons*/}
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                        <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    );
};

// <div>
//     <Card>
//         {/* pour limage */}
//         <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
//         {/* Pour le contenu */}
//         <CardContent className={classes.cardContent}>
//         <Typography variant='h4'>{item.name}</Typography>
//         <Typography variant='h5'>{item.line_total.formatted_with_code}</Typography>
//         </CardContent>
//         {/* pour la zone des boutons*/} 
//         <CardActions className={classes.cardActions}>
//             <div className={classes.buttons}>
//                 <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id,item.quantity - 1)}>-</Button>
//                 <Typography>{item.quantity}</Typography>
//                 <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id,item.quantity + 1)}>+</Button>
//             </div>
//             <Button variant='contained' type='button' color='secondary' onClick={()=> onRemovefromCart(item.id)}>Remove</Button>
//         </CardActions>
//     </Card>
// </div>
export default CartItem;