import React, { useState, useEffect } from 'react';
//import du commerce.js 
import { commercez } from './lib/commerce';
//import du Component Products (englobant le component Product)
// import {Products, Navbar } from './components';

import Products from './components/Products/Products';
//Import de la NavBar
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
//Checkout
import Checkout from './components/CheckoutForm/Checkout/Checkout';
//Import du Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  //PRODUITS
  //Par defaut le produit sera égal à un Array Vide
  const [products, setProducts] = useState([]);

  //Creation de la fonction asynchrone(Utilisés pour appel d'APIs)
  //Envoie d'une requette et attende d'une réponse, pour pouvoir creer nos produits


  const fetchProducts = async () => {
    //{data} est utilisé pour la destructuration des données qu'on va recevoir. data sera notre produit
    const { data } = await commercez.products.list();
    setProducts(data);
  }

  //CADIE creation de la cadie (Cart) (A prendre aussi de commerce.js
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    const cart = await commercez.cart.retrieve()
    setCart(cart);

  }
  //Creation de la fonction pour ajouter le produit a la cadie

  const ajout = async (productId, quantity) => {
    //destructuration nous permet d'eviter le x.cart 
    const { cart } = await commercez.cart.add(productId, quantity);
    setCart(cart);
  }

  //Update de la quantité d'element dans la cadie (Feature commerce.js aussi)

  const updateQt = async (lineItemId, quantity) => {
    const { cart } = await commercez.cart.update(lineItemId, {quantity});
    setCart(cart);

  }

  //Enlever de la cadie
  const removefromCart = async (productId) => {
    const { cart } = await commercez.cart.remove(productId);
    setCart(cart);
  }

  //Vider la cadie 
  const emptyCart= async ()=>{
    const { cart } = await commercez.cart.empty();
    setCart(cart);

  }

  //Utilisation de useEffect pour Fetch (Fetch= Aller chercher)
  //la dépendance sera un Array vide
  //le log du produit nous montre un tbleau vide avant la creation du produit dans commerce.js
  //Apres la creation du produit on voit un tableau d'objet representant le produit
  //Pour ajout des prodruits aller sur le site de commerce.js, onglet produits et ajouter les produits

  //useEffect sert aussi re render notre appli a chaque fois que son deuxieme paramètre change (ici, un array vide). Ca sert à fetch automatiquement les produits dès qu'on en ajoute sur commercejs et a fetch aussi la cadie lorsqu'on clique pour y ajouter un produit

  useEffect(() => {
    fetchProducts();
    //si on log cart on voit un objet. La propriete line_items montre ce qu'il y a ds la cadir et subtotal,total_items le nombre
    fetchCart();
  }, []);

  //Pour afficher ce qui a été crée sur commerce.js on doit passer la variable products en props
  // console.log(products);
  return (
    <Router>
      <div>
        {/* Nav sera toujours presente */}
        <Navbar totalItems={cart.total_items} />
        {/* On va switch (naviguer) entre Produits et cart*/}
        <Switch>
          {/* Une route pour chaque Page en prenant soin de mettre exact path='/Chemin voulu' */}
          <Route exact path='/'>
            <Products products={products} onAjout={ajout} />
          </Route>
          <Route exact path='/cart'>
            <Cart 
            updateQt={updateQt}
            removefromCart={removefromCart}
            emptyCart={emptyCart}
            cart={cart} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
