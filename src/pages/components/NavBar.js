import react from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    AppBar: {
        position: 'static',
        display: 'flex',
        background: '#97D69E'
    },
    Github: {
        width: '38px',
        height: '38px',
        color: 'white'
    },
    Linkedin: {
        width: '40px',
        height: '40px',
        background: '#97D69E',
        color: 'white',
    },
    AppBarSections: {
        wordSpacing: '15px',
        height: '30px',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'white',
        float: 'right'
    },
    title: {
        height: '30px',
        flexGrow: '1',
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'white',
        float: 'left'
    },
    Link: {
        textDecoration: 'none',
        color: 'white',
    }
});

function NavBar() {
    const classes = useStyles();

    return (
      <div style={{flexGrow: '1'}}>
            <AppBar className={classes.AppBar}>
                <Toolbar>
                    <Grid container style={{marginTop: '10px'}}>
                        <Grid item xs={5} container>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.title}>
                                    Linda Duong
                                </Typography>     
                            </Grid>
                            <Grid item xs={2}>
                                <a target="_blank" href='https://github.com/lindaduong25'>
                                    <GitHubIcon className={classes.Github}/>
                                </a>
                                <a target="_blank" href='https://www.linkedin.com/in/lindaduong25'>
                                    <LinkedInIcon className={classes.Linkedin}/>
                                </a>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <div className={classes.AppBarSections}>
                                <Link to="/About" className={classes.Link}>About </Link>
                                <Link to="/Experiences" className={classes.Link}>Experiences </Link>
                                <Link to="/Education" className={classes.Link}>Education </Link>
                                <Link to="/Projects" className={classes.Link}>Projects </Link>
                                <Link to="/Contact" className={classes.Link}>Contact</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
      </div>
    );
  }

  export default NavBar;