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

function BudgetSelection() {
    const classes = useStyles();
    const [budget, setBudget] = useState({
        budgetLow: false,
        budgetMed: false,
        budgetHigh: false,
        budgetUltra: false,
    })



    useEffect(() => {
        console.log(budget)
    })

    const handleChange = (event) => {
        setBudget({ ...budget, [event.target.name]: event.target.checked });
    };

    const { budgetLow, budgetMed, budgetHigh, budgetUltra } = budget
    // const error = [budgetLow, budgetMed, budgetHigh, budgetUltra].filter((v) => v).length <= 1;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> <h1 className="selectorHeader">Select a budget</h1> </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={budgetLow} onChange={handleChange} name="budgetLow" />}
                        label="A little something (<$100)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetMed} onChange={handleChange} name="budgetMed" />}
                        label="A special gift ($100-$500)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetHigh} onChange={handleChange} name="budgetHigh" />}
                        label="A spoiling ($500-$1000)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetUltra} onChange={handleChange} name="budgetUltra" />}
                        label="Something Big ticket ($1000+)"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default BudgetSelection;