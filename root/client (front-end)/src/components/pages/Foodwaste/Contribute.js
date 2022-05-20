import React from 'react';
import '../../../styles/pages/Contribute.css';
import Footer from "../../Footer";
import {CardHeader, Grid, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import cardImage1 from "../../../img/contributeCardIMG2.jpg";
import cardImage2 from "../../../img/contributeCardIMG1.jpg";
import cardImage3 from "../../../img/contributeCardIMG3.jpg";
import cardImage4 from "../../../img/contributeCardIMG4.jpg";
import cardImage5 from "../../../img/contributeCardIMG5.jpg";
import cardImage6 from "../../../img/contributeCardIMG6.jpg";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "80px",
        paddingRight: "80px",
        marginTop: "10px",
        marginBottom: "30px"
    },
    root: {
        maxWidth: 450,
        maxHeight: 400
    }
});

function Contribute() {
    const classes = useStyles();
    return (
        <div className='contributePage'>
                <h1 className='contribute-title'>How can I cut food waste at home?</h1>
                <Grid container spacing={5} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="http://resource.co/article/six-apps-taking-fight-food-waste-11587"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                           component="img"
                                           height="190"
                                           image={cardImage1}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Surplus food isn't food wasted
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        Use apps(olio, no waste) to save and share food that might otherwise be wasted.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="https://www.food.gov.uk/science/microbiology/use-by-and-best-before-dates"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={cardImage2}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Plan ahead - don't over buy
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        What the difference between 'useby' and 'best before' dates? Avoid mouldy surprises.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="https://friendsoftheearth.uk/sustainable-living/40-handy-bread-tips-and-what-do-stale-bread"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={cardImage3}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Love your leftovers
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        Don't let anything go to waste - use leftovers to create new meals.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="https://www.huffingtonpost.co.uk/2016/02/05/wonky-veg-policy-at-supermarkets-tesco-sainsbury-morrisons-co-op-aldi_n_9169362.html?guccounter=1"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={cardImage4}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Wonky Vegetables
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        Consumer demand for picture-perfect fruits/vegetables leads to tons of perfectly good food going to waste.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="https://www.rhs.org.uk/advice/profile?PID=444"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={cardImage5}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Compost If You Can
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        Give your waste a new lease of life. Its a beneficial way to turn scraps into energy/nutrients for plants.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea href="https://www.medicalnewstoday.com/articles/327325#freeze-extras"
                                            target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={cardImage6}
                                />
                                <CardContent>
                                    <Typography id={'cardTitle'}>
                                        Freeze/Preserve extras
                                    </Typography>
                                    <Typography id={'cardInfo'}>
                                        Many fresh fruits/vegetables keep well when frozen, prevent them from spoiling and being thrown away.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            <Footer/>
        </div>
    )
}

export default Contribute;
