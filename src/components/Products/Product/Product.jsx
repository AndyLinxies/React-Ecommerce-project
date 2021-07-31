import React from 'react';
//import des cartes à partir de material-ui
import {Card, CardActions, CardMedia, CardContent, Typography, IconButton} from '@material-ui/core';
//import de l'icone 'cadie'
import { AddShoppingCart } from '@material-ui/icons';
//Ce component crée un seul produit

//utilisation de la hook pour le style
import useStyles from './styles';

//On recoit les produits crees sur commerce.js
//voir les proprieétes de l'objet pour comprendre comment les appeler
const Product = ({product, onAjout}) => {
    const classes = useStyles();
    //Au lieu d'utiliser 'props' dans les parametres on utilise {product} pour eviter de faire 'props.product' 
    return (
        //Le produit est une carte
        <Card className={classes.root}>
            {/* zone image */}
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            {/* <img src={product.image} alt="" /> */}
            {/* zone contenu avec les textes */}
            <CardContent >
            <div className={classes.cardContent}>
            {/* Texte dans material-ui de type h5 et de l'espace en bas*/}
                <div className={classes.nameDes}>
                <Typography variant='h5' component="h2" gutterBottom>
                    {product.name}
                </Typography>
                <div className={classes.Des}>
                <Typography  variant='body2' color='textSecondary' dangerouslySetInnerHTML={{__html: product.description}}>
                </Typography>
                </div>
                </div>
                <Typography  variant='h5' component="h2" gutterBottom>
                    {product.price.formatted_with_code} 
                </Typography>
                {/* textSecondary : couleur de texte grise */}
                {/* dangerouslySetInnerHTML sert a enlever les balises html et à n'afficher que le texte */}
                
            </div>
            </CardContent>
            {/* zone actions */}
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAjout (product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;