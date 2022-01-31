import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles ({
    contactHeader: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '48px',
        lineHeight: '60px',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    line: {
        borderTop: '4px solid #97D69E'
    },
    p1: {
        marginTop: '20px',
        textAlign: 'left',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    p2: {
        textAlign: 'left',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    },
    atag: {
        textDecoration: 'none',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#FFFFFF'
    }
});

function Contact() {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="column" style={{marginTop: '200px'}}>
                <Grid item xs={12} container>
                    <Grid item xs={12} style={{marginBottom: '50px'}}>
                        <h1 className={classes.contactHeader}>Get in Touch with Me!</h1>
                    </Grid>
                <Grid/>
                <Grid item xs={12} container spacing={6} style={{paddingLeft: '100px', paddingRight: '100px'}}>
                    <Grid item xs={4}>
                        <div className={classes.line}>
                            <Typography className={classes.p1}>School Email</Typography>
                            <Typography className={classes.p2}>lduong8@gatech.edu</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.line}>
                            <Typography className={classes.p1}>Personal Email</Typography>
                            <Typography className={classes.p2}>lindaduong25@gmail.com</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.line}>
                            <Typography className={classes.p1}>LinkedIn</Typography>
                            <a target="_blank" href='https://www.linkedin.com/in/lindaduong25' className={classes.atag}>linkedin.com/in/lindaduong25</a>
                        </div>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Contact;