import React, {useState,useEffect} from 'react';
import useStyles from './checkoutStyle';
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core';
import {commercez} from '../../../lib/commerce';
import AddressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

//The steps
const steps = ['Shipping address', 'Payment details', 'Review your order'];

const Checkout = ({cart}) => {
    const classes = useStyles();

    //le state du stepper
    const [activeStep, setActiveStep] = useState(0);

    //le CheckoutToken
    const [checkoutToken, setCheckoutToken] = useState(null);


    useEffect(() => {
        const generateToken= async ()=>{
            //try and catch . Il faut generer un token pour le paiement
            try{
                //on genere un token
                const token = await commercez.checkout.generateToken(cart.id, {type:"cart"});
                console.log(token);
                //CheckoutToken prend la valeur du token recu
                setCheckoutToken(token);
            }
            catch{
                
            }

        }
        generateToken();
    },[cart])
    
    //Si on est à la premiere Etape on affiche AdressForm sinon on affiche PaymentForm
    const Form=()=>(
        activeStep===0?<AddressForm checkoutToken={checkoutToken} />:<PaymentForm/>
    );

    //Confirmation
    const Confirmation=()=>(
        <div>Confirmation</div>
    )
    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">Checkout</Typography>
                        {/* Component Stepper sert à nous montrer les étapes du processus de checkout. activeStep= A quel niveau nous sommes actuellement dans le process */}
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((element) => (
                                <Step key={element}>
                                    <StepLabel>{element}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {/* Si on est a la derniere étape .On envoie le form qui si l'on a le token sinon erreur*/}
                        {activeStep === steps.length ? <Confirmation/>: checkoutToken && <Form/>}
                    </Paper>
                </main>
            </div>
        </>
    );
};

export default Checkout;