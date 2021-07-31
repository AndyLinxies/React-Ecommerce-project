import React from 'react';
//Import pour pouvoir utiliser le composant Grid de material-ui
import { Grid } from '@material-ui/core';

//import du component Product
import Product from './Product/Product';
//
import { useState } from 'react'
//
import useStyles from './styles';
//les images
// import pc from '../../img/windows.jpg';
import pc from '../../img/windows.jpg';
import chaussure from '../../img/shoes1.jpg';


// const products = [
// {
//     id: 1,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: '1000€',
//     image: chaussure
// },
// {
//     id: 2,
//     name: 'Computer',
//     description: 'Laptop',
//     price: '500€',
//     image: pc
// }
// ];



const Products = ({ products, onAjout }) => {
    const classes = useStyles();
    //recherche
    const [searchTerm, setSearchTerm] = useState('');
    // console.log(products);
    
    return (
        <main className={classes.content}>
            {/* Pour que les cartes se détachent de la nav */}
            <div className={classes.toolbar} />
            {/* Component venant de material-ui */}
            {/* xs=12 pour qu'il prennes tout l'espace dispo sur mobile, sm et lg pour tablette et grand ecran */}
            <div className='search'>
                <input className='myInput' type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            <Grid container justifyContent="center" spacing={4}>
                {products.filter((product) => {
                    if (searchTerm == '') {
                        return product
                    } else if (product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return product
                    }
                }).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                        {/* Le component Product sans S est appelé et sa props product est l'elem de la boucle*/}
                        <Product  product={product} onAjout={onAjout} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

// {/* Component venant de material-ui */}
// <div>
//     <Grid container justify="center" spacing={4}>
//         {products.map(produit => {
//             {/* xs=12 pour qu'il prennes tout l'espace dispo sur mobile, sm et lg pour tablette et grand ecran */ }
//             <Grid item key = {produit.id} xs = {12} sm = {6} lg = {3} >
//             {/* Le component Product sans S est appelé */ }
//             <Product product = {products}/>
//         })}
//     </Grid>
// </div>
export default Products;