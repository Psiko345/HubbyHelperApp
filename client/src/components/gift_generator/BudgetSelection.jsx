import React from 'react';
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
    const [state, setState] = React.useState({
        low: false,
        med: false,
        high: false,
        ultra: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { low, med, high, ultra } = state
    const error = [low, med, high, ultra].filter((v) => v).length <= 0;

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> <h1 className="selectorHeader">Select a budget</h1> </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={low} onChange={handleChange} name="low" />}
                        label="A little something"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={med} onChange={handleChange} name="med" />}
                        label="A special gift"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={high} onChange={handleChange} name="high" />}
                        label="A spoiling"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ultra} onChange={handleChange} name="ultra" />}
                        label="Something Big ticket"
                    />
                </FormGroup>
            </FormControl>

        </div>
    )
}

export default BudgetSelection;