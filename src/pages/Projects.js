import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    header1: {
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#97D69E',
    },
    header2: {
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#97D69E',
    },
    header3: {
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#97D69E',
    },
    par1: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    par2: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    par3: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    }
});

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Grid container style={{marginTop: '50px'}}>
                <Grid item xs={12} container style={{marginLeft: '100px', marginRight: '100px'}}>
                    <h1 className={classes.header1}>Survey Poll Platform</h1>
                    <p className={classes.par1}>
                        I currently work on the front end development team for our ongoing project in creating a survey website. 
                        The goal is to allow students at Ga Tech to utilize this platform to create their own surveys as well as to take other 
                        people’s surveys when invited with a link for instance. This project opened my eyes to UX/UI as I had to use Figma to 
                        create prototypes and wireframes for the design layout.
                    </p>
                    <h1 className={classes.header2}>Website Portfolio</h1>
                    <p className={classes.par2}>
                        I created this site using React, Figma, Material-UI, and Dribble. The portfolio basically encompasses my involvment within 
                        my major of Computer Science and the experiences and skills I have gained thus far.
                    </p>
                    <h1 className={classes.header3}>Python Beginner Game</h1>
                    <p className={classes.par3}>
                        This python Choose your own Adventure game was built on getting user inputs and conditional statements. It was used to help 
                        introduce me to bulding out an interactive program which I believe is an important component of Computer Science as technology 
                        is meant to serve people and be used by real users.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Projects;