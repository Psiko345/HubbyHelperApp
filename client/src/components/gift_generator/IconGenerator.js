import React from 'react'
import necklace from './icons/necklace.png';
import earrings from './icons/earrings.png';
import ring from './icons/ring.png'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        maxHeight: 140,
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