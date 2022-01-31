import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    SchoolName: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '30px',
        color: '#97D69E'
    },
    Date: {
        textAlign: 'right',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '30px',
        color: '#97D69E'
    },
    p1: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    p2: {
        textAlign: 'left',
        left: '70px',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#FFFFFF'
    }
});

function Education() {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="column" style={{marginTop: '100px'}}>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={6} style={{paddingLeft: '100px'}}>
                        <h1 className={classes.SchoolName}>Georgia Institute of Technology</h1>
                    </Grid>
                        <Grid item xs={6} style={{paddingRight: '100px'}}>
                    <h1 className={classes.Date}>Expected Graduation May 2024</h1>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft: '100px'}}>
                        <p className={classes.p1}>
                            Candidate for Bachelor of Science in Computer Science 
                        </p>
                        <p className={classes.p2}>
                            Coursework: Introduction to Python, Object Oriented Programming, Discrete Mathematics, 
                            Data Structures and Algorithms
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Education;