import React, { useReducer } from 'react'
import GiftCategories from '../criteria_selectors/GiftSelection'
import BudgetSelection from '../criteria_selectors/BudgetSelection'
import gifts from '../criteria_selectors/gifts_list'
import { Button } from '../Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { display } from '@material-ui/system';
import GiftIcon from './gift-icon-52.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function GiftGenerator() {
    const classes = useStyles();
    const [state, dispatch] = useReducer((state, action) => {
        if (action === "generateGift") {
            return
        }
    },
        {

        }
    )

    return (
        <div>
            <Button onClick={() => dispatch("generateGift")}>Generate Gift!</Button>
            <br>
            </br>
            <Card className={classes.root}>
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                        Let's get her some:
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={GiftIcon}
                        title="placeholder gift icon"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            /gift/, with a budget of: /budget/
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default GiftGenerator

// let possibleMatchingGifts = gifts
// .filter(() => isInPriceRange(x))
// .filter(x => isInGiftCategory(x))

/*
Take budget selection, apply to gift categories

when user clicks to generate a gift,
check what catagories are selected,
then select a random index number from the array of sub-categories
combine budget and gift selection
Generate div with budget and gift icon displayed:

eg. "Let's buy her some {gifts.shoes.name.high_heels}, in the range of {budgetselection.budgetMed}"

*/