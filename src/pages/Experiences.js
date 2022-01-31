import react from'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { CgFigma } from 'react-icons/cg';
import resume from './otherStuff/resume.pdf';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    p1: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '45px',
        color: '#FFFFFF',
    },
    p2: {
        textAlign: 'left',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '45px',
        color: '#FFFFFF',
    },
    h3: {
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    FaReact: {
        color: 'white',
        width: '54px',
        height: '54px',
        color: '#97D69E',
        paddingRight: '50px'
    },
    FaJava: {
        color: 'white',
        height:'54px',
        width: '54px',
        color: '#97D69E',
        paddingRight: '50px'
    },
    html: {
        color: 'white',
        height:'54px',
        width: '54px',
        color: '#97D69E',
        paddingRight: '50px'
    },
    css: {
        color: 'white',
        height:'54px',
        width: '54px',
        color: '#97D69E',
        paddingRight: '50px'
    },
    figma: {
        color: 'white',
        height:'54px',
        width: '54px',
        color: '#97D69E'
    },
    pdflink: {
        textDecoration: 'none',
        color: '#97D69E'
    }
});

function Experiences() {
    const classes = useStyles();

    return (
        <div>
            <Grid container style={{marginTop: '100px'}}>
                <Grid item xs={12} container direction="row" style={{marginLeft: '100px', marginRight: '100px', marginTop: ''}}>
                    <Grid item xs={12}>
                        <p className={classes.p1}>
                            I am currently looking and applying for an internship for Spring 2022 and have attached my resume
                            <a target="_blank" href={resume} className={classes.pdflink}> here.</a>
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.p2}>
                            In the meantime, I have been working on personal projects within and outside of my position on the Internal Tools Team 
                            for the IT Board at Georgia Tech.
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justify="center" direction="row" style={{marginTop: '50px', marginBottom: '100px'}}>
                    <Grid item xs={12}>
                        <h3 className={classes.h3}>Skills</h3>
                    </Grid>
                    <div style={{}}>
                        <FaReact className={classes.FaReact}/>
                        <FaJava className={classes.FaJava}/>
                        <IoLogoHtml5 className={classes.html}/>
                        <IoLogoCss3 className={classes.css}/>
                        <CgFigma className={classes.figma}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Experiences;