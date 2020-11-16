import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import necklace from '../../../gift_generator/icons/necklace.png';
import earrings from '../../../gift_generator/icons/earrings.png';
import ring from '../../../gift_generator/icons/ring.png'
import bottoms from '../../../gift_generator/icons/bottoms.png'
import bunch from '../../../gift_generator/icons/bunchOfFlowers.png'
import dayTrip from '../../../gift_generator/icons/dayTrip.png'
import diningOut from '../../../gift_generator/icons/diningOut.png'
import dress from '../../../gift_generator/icons/dress.png'
import dressShoes from '../../../gift_generator/icons/dressShoes.png'
import highHeels from '../../../gift_generator/icons/highHeels.png'
import makeUp from '../../../gift_generator/icons/makeUp.png'
import perfume from '../../../gift_generator/icons/perfume.png'
import singleFlower from '../../../gift_generator/icons/singleFlower.png'
import sneakers from '../../../gift_generator/icons/sneakers.png'
import tops from '../../../gift_generator/icons/tops.png'
import weekendRetreat from '../../../gift_generator/icons/weekendRetreat.png'
import weekGetaway from '../../../gift_generator/icons/weekGetaway.svg'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Joshua Piper
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));




const UserGiftDisplay = ({ gifts, user, isAuthenticated }) => {
    const classes = useStyles();
    console.log({ gifts })
    console.log({ user })
    console.log({ isAuthenticated })

    const matchGiftNameToIcon = (gifts) => {
        if (gifts.name === "Necklace")
            return necklace
        if (gifts.name === "Earrings")
            return earrings
        if (gifts.name === "Ring")
            return ring
        if (gifts.name === "A Bunch")
            return bunch
        if (gifts.name === "Single")
            return singleFlower
        if (gifts.name === "A Day Trip")
            return dayTrip
        if (gifts.name === "A Weekend Retreat")
            return weekendRetreat
        if (gifts.name === "A Weeks Getaway")
            return weekGetaway
        if (gifts.name === "Make Up")
            return makeUp
        if (gifts.name === "Perfume")
            return perfume
        if (gifts.name === "Food/Drink")
            return diningOut
        if (gifts.name === "Tops")
            return tops
        if (gifts.name === "Bottoms")
            return bottoms
        if (gifts.name === "Dress")
            return dress
        if (gifts.name === "Sneakers")
            return sneakers
        if (gifts.name === "High-heels")
            return highHeels
        if (gifts.name === "Dress Shoes")
            return dressShoes
        return "Unknown";
    }

    const cards = gifts;
    console.log(gifts.length)

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <img className="userIcon" src={user.picture} alt={user.name} />
                        <Typography component="h1" variant="h2" align="center" color="initial" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography variant="h5" align="center" color="initial" paragraph>
                            These are your saved gifts.
              </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        className={classes.cardMedia}
                                        src={matchGiftNameToIcon(card)}
                                        title="Icon of Gift"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            ${card.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small" color="primary">
                                            Edit
                                        </Button> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    {/* Footer */}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {/* Something here to give the footer a purpose! */}
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );

};

export default UserGiftDisplay;