import React, { useReducer, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect } from 'react';

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
    const [state, dispatch] = useReducer((state, action) => {
        if (action === "setBudgetLow") {
            const newState = { ...state };
            newState.budgetLow = !newState.budgetLow
            return newState;
        } else if (action === "setBudgetMed") {
            const newState = { ...state };
            newState.budgetMed = !newState.budgetMed
            return newState;
        } else if (action === "setBudgetHigh") {
            const newState = { ...state };
            newState.budgetHigh = !newState.budgetHigh
            return newState;
        } else if (action === "setBudgetUltra") {
            const newState = { ...state };
            newState.budgetUltra = !newState.budgetUltra
            return newState;
        } else {
            return state;
        }
    },
        {
            budgetLow: false,
            budgetMed: false,
            budgetHigh: false,
            budgetUltra: false,
        });

    useEffect(() => {
        console.log(state)
    })

    const handleChange = (event) => {
        dispatch({ ...state, [event.target.name]: event.target.checked });
    };

    const { budgetLow, budgetMed, budgetHigh, budgetUltra } = state
    // const error = [budgetLow, budgetMed, budgetHigh, budgetUltra].filter((v) => v).length <= 1;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> <h1 className="selectorHeader">Select a budget</h1> </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={budgetLow} onChange={handleChange} onClick={() => dispatch("setBudgetLow")} name="budgetLow" />}
                        label="A little something (<$100)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetMed} onChange={handleChange} onClick={() => dispatch("setBudgetMed")} name="budgetMed" />}
                        label="A special gift ($100-$500)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetHigh} onChange={handleChange} onClick={() => dispatch("setBudgetHigh")} name="budgetHigh" />}
                        label="A spoiling ($500-$1000)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={budgetUltra} onChange={handleChange} onClick={() => dispatch("setBudgetUltra")} name="budgetUltra" />}
                        label="Something Big ticket ($1000+)"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default BudgetSelection;