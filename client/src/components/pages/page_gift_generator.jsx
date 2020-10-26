import React from 'react';
import BudgetSelection from "../gift_generator/BudgetSelection"
import GiftCategories from "../gift_generator/gift_categories"
import gifts from '../gift_generator/gifts_list'
import { Button } from '../Button'
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

// let possibleMatchingGifts = gifts.filter( x => isInPriceRange(x)).filter( x => isInGiftCategory(x))

function GiftGeneratorPage() {
    const classes = useStyles();


    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}><BudgetSelection /></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}><GiftCategories /></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}><Button onClick=''>Generate Gift</Button></Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default GiftGeneratorPage;