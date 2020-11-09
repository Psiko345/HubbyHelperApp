import React, { useState, useEffect } from 'react'
import GiftCategories from '../criteria_selectors/GiftSelection'
import BudgetSelection from '../criteria_selectors/BudgetSelection'
import { Gifts } from '../criteria_selectors/gifts_list'
import { Button } from '../Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GiftIcon from './gift-icon-52.png';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        maxHeight: 140,
    },
});

function GiftGenerator({ budget, incomingCategories }) {
    const classes = useStyles();
    const [showCard, setShowCard] = useState(false)
    console.log({ incomingCategories })

    const isInGiftCategory = (aGift, categories) => {
        console.log({ aGift, categories })
        if (aGift.category === "jewelry" && categories.jewelry)
            return true
        if (aGift.category === "flowers" && categories.flowers)
            return true
        if (aGift.category === "getaways" && categories.getaways)
            return true
        if (aGift.category === "consumables" && categories.consumables)
            return true
        if (aGift.category === "clothes" && categories.clothes)
            return true
        if (aGift.category === "shoes" && categories.shoes)
            return true
        return false
    }

    const toPriceRange = (budget) => {
        if (budget.budgetLow)
            return "< $100";
        if (budget.budgetMed)
            return "$100-$500";
        if (budget.budgetHigh)
            return "$500-$1000";
        if (budget.budgetUltra)
            return "$1000+";
        return "Other";
    }
    // const something = JSON.stringify(budget);
    let possibleMatchingGifts = Gifts.filter(aGift => isInGiftCategory(aGift, incomingCategories));
    console.log({ possibleMatchingGifts })

    let random = Math.floor(Math.random() * possibleMatchingGifts.length)
    console.log({ random })

    let chosenGift = possibleMatchingGifts[random];
    console.log({ chosenGift })

    useEffect(() => {
        console.log({ chosenGift })
    })

    const handleShowCard = () => setShowCard(!showCard)

    return (
        <div>
            <Button onClick={handleShowCard}>Generate Gift!</Button>

            {showCard && (
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
                        {!chosenGift && <p>No matching gift</p>}
                        {chosenGift && (<CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {chosenGift.name}, with a budget of: {toPriceRange(budget)}
                            </Typography>
                        </CardContent>)}
                    </CardActionArea>
                </Card>
            )}
        </div>
    )
}

export default GiftGenerator

// let possibleMatchingGifts = gifts
// .filter(x => isInPriceRange(x, budget))
// .filter(x => isInGiftCategory(x, categories))

/*
Take budget selection, apply to gift categories

when user clicks to generate a gift,
check what catagories are selected,
then select a random index number from the array of sub-categories
combine budget and gift selection
Generate div with budget and gift icon displayed:

eg. "Let's buy her some {gifts.shoes.name.high_heels}, in the range of {budgetselection.budgetMed}"

*/