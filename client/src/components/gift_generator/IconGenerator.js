import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

import necklace from './icons/necklace.png';
import earrings from './icons/earrings.png';
import ring from './icons/ring.png'
import bottoms from './icons/bottoms.png'
import bunch from './icons/bunchOfFlowers.png'
import dayTrip from './icons/dayTrip.png'
import diningOut from './icons/diningOut.png'
import dress from './icons/dress.png'
import dressShoes from './icons/dressShoes.png'
import highHeels from './icons/highHeels.png'
import makeUp from './icons/makeUp.png'
import perfume from './icons/perfume.png'
import singleFlower from './icons/singleFlower.png'
import sneakers from './icons/sneakers.png'
import tops from './icons/tops.png'
import weekendRetreat from './icons/weekendRetreat.png'
import weekGetaway from './icons/weekGetaway.svg'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        maxHeight: 400,
    },
});



function IconGenerator({ chosenGift }) {
    const classes = useStyles();

    const matchGiftNameToIcon = (chosenGift) => {
        if (chosenGift.name === "Necklace")
            return necklace
        if (chosenGift.name === "Earrings")
            return earrings
        if (chosenGift.name === "Ring")
            return ring
        if (chosenGift.name === "A Bunch")
            return bunch
        if (chosenGift.name === "Single")
            return singleFlower
        if (chosenGift.name === "A Day Trip")
            return dayTrip
        if (chosenGift.name === "A Weekend Retreat")
            return weekendRetreat
        if (chosenGift.name === "A Weeks Getaway")
            return weekGetaway
        if (chosenGift.name === "Make Up")
            return makeUp
        if (chosenGift.name === "Perfume")
            return perfume
        if (chosenGift.name === "Food/Drink")
            return diningOut
        if (chosenGift.name === "Tops")
            return tops
        if (chosenGift.name === "Bottoms")
            return bottoms
        if (chosenGift.name === "Dress")
            return dress
        if (chosenGift.name === "Sneakers")
            return sneakers
        if (chosenGift.name === "High-heels")
            return highHeels
        if (chosenGift.name === "Dress Shoes")
            return dressShoes
        return "Unknown";
    }

    return (
        <div>
            <CardMedia
                component="img"
                className={classes.media}
                src={matchGiftNameToIcon(chosenGift)}
                alt="gift icon image"
            />
        </div>
    )
}

export default IconGenerator;