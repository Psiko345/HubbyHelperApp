import React, { useReducer } from 'react';
import { useEffect } from 'react';
// import gifts from './gifts_list'
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

function GiftCategories() {
    const classes = useStyles();
    const [state, dispatch] = useReducer((state, action) => {
        if (action === "allowJewelry") {
            const newState = { ...state };
            newState.jewelry = !newState.jewelry
            return newState
        } else if (action === "allowFlowers") {
            const newState = { ...state };
            newState.flowers = !newState.flowers
            return newState;
        } else if (action === "allowGetaways") {
            const newState = { ...state };
            newState.getaways = !newState.getaways
            return newState;
        } else if (action === "allowConsumables") {
            const newState = { ...state };
            newState.consumables = !newState.consumables
            return newState;
        } else if (action === "allowClothes") {
            const newState = { ...state };
            newState.clothes = !newState.clothes
            return newState;
        } else if (action === "allowShoes") {
            const newState = { ...state };
            newState.shoes = !newState.shoes
            return newState;
        } else {
            return state;
        }
    },
        {
            jewelry: false,
            flowers: false,
            getaways: false,
            consumables: false,
            clothes: false,
            shoes: false,
        });

    useEffect(() => {
        console.log(state)
    })

    const handleChange = (event) => {
        dispatch({ ...state, [event.target.name]: event.target.checked });
    };

    const { jewelry, flowers, getaways, consumables, clothes, shoes } = state
    // const error = [jewelry, flowers, getaways, consumables, clothes, shoes].filter((v) => v).length <= 1;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> <h1 className="selectorHeader">Select some gift catagories</h1> </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={jewelry} onChange={handleChange} onClick={() => dispatch("allowJewelry")} name="jewelry" />}
                        label="Jewelry"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={flowers} onChange={handleChange} onClick={() => dispatch("allowFlowers")} name="flowers" />}
                        label="Flowers"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={getaways} onChange={handleChange} onClick={() => dispatch("allowGetaways")} name="getaways" />}
                        label="Getaways"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={consumables} onChange={handleChange} onClick={() => dispatch("allowConsumables")} name="consumables" />}
                        label="Consumables"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={clothes} onChange={handleChange} onClick={() => dispatch("allowClothes")} name="clothes" />}
                        label="Clothes"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={shoes} onChange={handleChange} onClick={() => dispatch("allowShoes")} name="shoes" />}
                        label="Shoes"
                    />
                </FormGroup>
            </FormControl>

        </div>
    )
}

export default GiftCategories;