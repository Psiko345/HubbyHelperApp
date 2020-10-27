import React from 'react';
import BudgetSelection from "../criteria_selectors/BudgetSelection"
import GiftCategories from "../criteria_selectors/GiftSelection"
import GiftGenerator from '../gift_generator/Gift_generator'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function GiftGeneratorPage() {
    const classes = useStyles();

    let budgetSelection = { budgetMedium: false }
    let giftCategories = {}

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}><BudgetSelection model={budgetSelection} /></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}><GiftCategories model={giftCategories} /></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}><GiftGenerator categories={giftCategories} budget={budgetSelection} /></Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default GiftGeneratorPage;