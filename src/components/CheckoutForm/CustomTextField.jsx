import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

//Utilisation de React Hook from pour faciliter la tache pour la creation des inputs

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    const isError = false;
    return (
        <Grid item xs={12} sm={6}>
            {/* Le controler est juste un input avec un effet de style qu'on importe */}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        label={label}
                        required
                    />
                )}
            />
        </Grid>
    );
};


export default FormInput;