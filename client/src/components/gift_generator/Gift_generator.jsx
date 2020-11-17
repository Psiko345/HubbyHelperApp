import React, { useState, useEffect } from 'react'
import { Gifts } from '../criteria_selectors/gifts_list'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconGenerator from './IconGenerator';
import SaveGift from './saveGift'
import { CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        maxHeight: 400,
    },
});

function GiftGenerator({ budget, incomingCategories }) {
    const classes = useStyles();
    const [showCard, setShowCard] = useState(false)
    console.log({ incomingCategories })

    const isInGiftCategory = (aGift, categories) => {
        // console.log({ aGift, categories })
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


    let possibleMatchingGifts = Gifts.filter(aGift => isInGiftCategory(aGift, incomingCategories));
    // console.log({ possibleMatchingGifts })

    let random = Math.floor(Math.random() * possibleMatchingGifts.length)
    // console.log({ random })

    let chosenGift = { budget: toPriceRange(budget), ...possibleMatchingGifts[random] };

    // console.log({ chosenGift })

    useEffect(() => {
        console.log({ chosenGift })
    })

    const handleShowCard = () => setShowCard(!showCard)


    return (
        <div>



            <Card className={classes.root}>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" color='primary' onClick={handleShowCard}>Generate Gift!</Button>
                </CardActions>
                {showCard && (
                    <div>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="h2">
                                Let's get her:
                        </Typography>
                            <IconGenerator chosenGift={chosenGift} />
                            {!chosenGift && <p>No matching gift</p>}
                            {chosenGift && (
                                <CardContent>
                                    <Typography variant="h4" color="primary" component="p">
                                        {chosenGift.name}! With a budget of: {toPriceRange(budget)}
                                    </Typography>
                                </CardContent>)}
                        </CardActionArea>
                        <SaveGift chosenGift={chosenGift} />
                    </div>
                )}
            </Card>

        </div>
    )
}

export default GiftGenerator;