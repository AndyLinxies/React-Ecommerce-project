import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import logo from '../../img/shop.jpg';

//import du Link pour pouvoir linker le clique de l'icone de la cadie à la cadie, useLocation pour savoir sur quel page on est (location.pathname)
import {Link, useLocation} from 'react-router-dom';

//import du style
import useStyles from './navStyle';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location= useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
            {/* A gauche  de la Nav */}
                <Toolbar>
                {/* Color inherit= prend la couleur du parent */}
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Andy's" height='25px' className={classes.image}/>
                    Andy's
                    </Typography>
                    {/* Au milieu de la Nav */}
                    <div className={classes.grow} />
                    {/* A droite */}
                    {/* il affiche l'icone cadie seulement Si on est sur '/'  */}
                    {location.pathname==='/' && (
                    <div className={classes.button}>
                    {/* Rajout de component={Link} to='/cart' pour mettre le lien (feature material-ui) */}
                        <IconButton color="inherit" component={Link} to='/cart'>
                        {/* Icone avec le nombre d'elements presents dans la cadie */}
                            <Badge color="inherit" badgeContent={totalItems} color='secondary'> 
                            {/* Icone de la cadie */}
                            <ShoppingCart />
                            </Badge> 
                        </IconButton>
                    </div>
                    )
                    
                    }
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;