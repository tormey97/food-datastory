import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import useStyles from "../styles/main"
import Link from "@material-ui/core/Link/Link";
import Button from "@material-ui/core/Button/Button";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import {Link as RouterLink} from "react-router-dom"
import Paper from "@material-ui/core/Paper/Paper";


function IntroductionSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <Typography className={classes.mainText}>
            <p>
                Nowadays, huge advances in medicine and nutrition have led us to understand that the way we eat plays the most
                important role in our health. Following a diet rich in omega 6, for example, will lead us into different
                diseases, like cancer. Avoiding bad diets is “easily” achieved by eating a great variety of different food,
                while minimizing the amount of unhealthy meals. However, things can get harder when we have certain
                restrictions or obligations in our diet, for instance if we have to counter a lack of iron, or if we are vegan.
            </p>
            <p>
                In this research we have worked with 779.088 recipes that exist arround the internet to find out hidden
                relationships between ingredients and diets. We want to know how the diet of people affects their nutrition
                in a way that was unexpected, so it can help these people improve their health. Let's say that, for example,
                you have a lactose intolerance. You allready know you will not eat milk, cheese, yogurt... But is that it?
                Will there be other ingredients or grups of ingredients also reduced (or increased) because of this
                restriction? Will it be harder for you to be healthy than a person with a regular diet? Maybe even easier?
                How complex will the recipes you can access be? All this questions and more, will be answer in this article.
                The diets analyzed are the following:
            </p>
            <p>
                <ul>
                    <li>Lactose intolerance</li>
                    <li>Gluten intolerance or celiac dissease</li>
                    <li>Vegan</li>
                    <li>Vegetarian </li>
                    <li>Diet rich in iron</li>
                    <li>Diet rich in omega 3</li>
                    <li>Diet rich in magnesium</li>
                    <li>Spicy food (not really a diet, but still interesting)</li>
                </ul>

                You do not follow any of these diets? Do not leave yet, there are things for you too here...
            </p>
        </Typography>
    );
}


function GeneralSection({sourcesRef}) {
    const classes = useStyles();
    return (
        
        <Typography className={classes.mainText}>
            <p>
                BLA BLA
            </p>
            <iframe width={1000} height={500} className={classes.plot} src={"./spainPyramid.html"}/>
            
            <p>
                BLA BLA
            </p>
            <iframe width={1000} height={500} className={classes.plot} src={"./UKPyramid.html"}/>
            <p>
                BLA BLA
            </p>
            <iframe width={1000} height={650} className={classes.plot} frameBorder={0} src={"./gant1.html"}/>
            <p>
                BLA BLA
            </p>
            <iframe height={650} frameBorder={0} className={classes.plot} src={"./gant2.html"}/>
            <p>
                BLA BLA

            </p>
            
            <p style={{textAlign: "center"}}>
                <RouterLink className={classes.link} to={process.env.PUBLIC_URL + "/dataStory"}><Button>Click here to check our data story!</Button></RouterLink>
            </p>
        </Typography>
        )

}



function DataStory() {
    const classes = useStyles();
    const [selectedDiet, setSelectedDiet] = React.useState(0);

    const sourcesRef = React.useRef(null);

    const changeDiet = (event, value) => {
        console.log(value);

        setSelectedDiet(value)
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.headerSection}>
                <Typography variant={"h4"}>
                    Introduction
                </Typography>
            </div>
            <div className={classes.section}>
                <IntroductionSection/>
            </div>
            <div className={classes.section}>
                <Divider/>
                <GeneralSection/>
            </div>

        </div>
    );
}

export default DataStory;