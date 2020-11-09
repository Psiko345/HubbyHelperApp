import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

function GiftSelection({ categories, setCategories }) {

    const classes = useStyles();

    useEffect(() => {
        console.log(categories)
    })


    const handleChange = (event) => {
        setCategories({ ...categories, [event.target.name]: event.target.checked });
        console.log({ categories })
    };

    const { jewelry, flowers, getaways, consumables, clothes, shoes } = categories
    // const error = [jewelry, flowers, getaways, consumables, clothes, shoes].filter((v) => v).length <= 1;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> <h1 className="selectorHeader">Select some gift catagories</h1> </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={jewelry} onChange={handleChange} name="jewelry" />}
                        label="Jewelry"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={flowers} onChange={handleChange} name="flowers" />}
                        label="Flowers"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={getaways} onChange={handleChange} name="getaways" />}
                        label="Getaways"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={consumables} onChange={handleChange} name="consumables" />}
                        label="Consumables"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={clothes} onChange={handleChange} name="clothes" />}
                        label="Clothes"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={shoes} onChange={handleChange} name="shoes" />}
                        label="Shoes"
                    />
                </FormGroup>
            </FormControl>

        </div>
    )
}

export default GiftSelection;