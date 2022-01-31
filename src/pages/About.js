import react from'react';
import { makeStyles } from '@material-ui/core/styles';
import profile from './otherStuff/profile.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    h4: {
        textAlign: 'left',
        marginLeft: '100px',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        color: '#FFFFFF'
    },
    firstParagraph: {
        textAlign: 'left',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        color: '#FFFFFF',
        marginLeft: '100px'
    },
    secondParagraph: {
        textAlign: 'left',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        color: '#FFFFFF',
        marginLeft: '100px'
    },
    ProfilePicBG: {
        height: '400px',
        width: '400px',
        background: '#FFFFFF',
        borderRadius: '50px',
        marginLeft: '25px',
        marginRight: '25px'
    },
    atag: {
        textDecoration: 'none',
        color: '#97D69E'
    }
});

function About() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12} container spacing={2} style={{marginBottom: '100px', marginTop: '150px'}}>
                    <Grid item xs={8} style={{}}>
                        <h4 className={classes.h4}>Hi, my name is Linda Duong. </h4>
                        <h1 className={classes.firstParagraph}>I am a second year Computer Science major Georgia Tech
                             interested in Web Development and UX/UI design.
                        </h1>
                        <h1 className={classes.secondParagraph}>I currently hold a position on the Internal Tools team for the <a target="_blank" href='https://www.sga.gatech.edu/' className={classes.atag}>SGA</a>, IT Board.
                            Additionally, I am involved with <a target="_blank" href='https://student-organizations.gatech.edu/content/first-year-leadership-organizations-flos' className={classes.atag}>CONNECT </a> 
                            and <a target="_blank" href='https://transitionprograms.gatech.edu/content/faset-orientation' className={classes.atag}>FASET</a>,
                            which are organizations to help new students transition seamlessly to campus.
                        </h1>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.ProfilePicBG}>
                            <img title="my-profile=pic" src={profile} alt="my-profile=pic" />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
  }

  export default About;