import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { IconButton, Container, Box, ListItem, ListItemText, List, Avatar, Grid, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useLayoutContext } from '../Contexts/LayoutContext';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { headerRoutes } from '../routes';
import SocialMedia from './Social Media';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#ffffff',
      [theme.breakpoints.down(960)]: {
        '& .MuiContainer-fixed': {
          width: '100%',
          maxWidth: 1500
        }
      },
      [theme.breakpoints.down(600)]: {
        '& .MuiContainer-fixed': {
          padding: 5
        }
      },
    },
    mainNav: {
      background: 'url(./top-bg.png) no-repeat center !important',
    },
    title: {
      flexGrow: 1,
      '& a:hover': {
        backgroundColor: 'transparent'
      },
    },
    hide: {
      display: 'none',
    },
    navButton: {
      borderRadius: 4,
      height: 40,
      borderBottom: 0,
      justifyContent: 'center',
      margin: '25px 0px 27px 10px',
      color: '#fff',
      background: 'linear-gradient(to right, rgba(59,172,233,1) 0%, rgba(1,121,185,1) 100%)',
      [theme.breakpoints.up(1024)]: {
        display: 'none',
      },
      [theme.breakpoints.down(600)]: {
        height: 35,
        margin: '20px 5px 20px 5px',
      },
      '& span': {
        height: 16,
        width: 16
      },
    },
    active: {
      '& span': {
        borderBottom: '2.5px solid #035cc1',
        backgroundColor: 'transparent'
      },
    },
    linkItem: {
      '& span:hover': {
        borderBottom: '2.5px solid #035cc1',
        backgroundColor: 'transparent'
      },
    },
    linkButton: {
      borderRadius: 4,
      borderBottom: 0,
      justifyContent: 'center',
      color: '#fff',
      background: 'linear-gradient(to right, rgba(59,172,233,1) 0%, rgba(1,121,185,1) 100%)',
      '& img': {
        marginRight: 10,
      },
      '& img.loginButton': {
        height: '18px !important'
      },
      '&:hover': {
        background: '#F58220',
      },
      [theme.breakpoints.between(1024, 1280)]: {
        '& span': {
          display: 'none',
        },
        '& img': {
          marginRight: 0,
        },
      },
      [theme.breakpoints.down(600)]: {
        padding: 8,
        '& span': {
          display: 'none',
        },
        '& img': {
          marginRight: 0,
        },
      },
    },
    headerItems: {
      [theme.breakpoints.between(0, 1024)]: {
        display: 'none',
      },
      '& a:hover': {
        backgroundColor: 'transparent'
      },
      [theme.breakpoints.down(1280)]: {
        '& a': {
          padding: '0 8px',
        },
      },
    },
    logoLink: {
      width: 'fit-content',
      padding: 0,
      [theme.breakpoints.down(600)]: {
        padding: '0 !important',
        '& img': {
          width: 180,
          height: 70,
        }
      },
      [theme.breakpoints.down(380)]: {
        '& img': {
          width: 160,
        }
      },
    },
    topStrip: {
      backgroundColor: '#000000',
      [theme.breakpoints.down(600)]: {
        display: 'none'
      },
    },
    headerList: {
      display: 'flex',
      textAlign: 'left'
    },
    headerListLeft: {
      padding: 0,
      margin: '0px 4px',
      width: 'fit-content'
    },

    contact: {
      width: 30,
      height: 30,
      backgroundColor: '#ffffff'
    },
    ListItemText: {
      fontSize: 14,
      color: '#ffffff',
      cursor: 'pointer',
      fontWeight: 700,
      '&:hover': {
        color: '#337ab7',
        textDecoration: 'none'
      },
      marginLeft: 5
    },
    ColorBlue: {
      color: '#337ab7'
    },
    floatingMenu: {
      position: 'fixed',
      left: 0,
      top: '45%',
      opacity: '100%',
      zIndex: 999,
      color: '#000000',
      '& li': {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        display: 'block',
        height: 48,
        width: 50,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 10,
        boxShadow: '0 1px 3px rgb(0 0 0 / 20%)',
        transition: 'all 0.2s ease-in-out',
        '& svg': {
          color: '#ffffff',
          fontSize: 26,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        [theme.breakpoints.down(600)]: {
          height: 38,
          width: 44,
          '& svg': {
            fontSize: 20
          }
        },
      },
    },
    callIcon: {
      backgroundColor: '#0b82c2',
    },
    whatsAppIcon: {
      backgroundColor: '#169c0f',
    },
    emailIcon: {
      backgroundColor: '#ff802b',
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  const layoutContext = useLayoutContext();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Typography className={classes.topStrip} component='div'>
        <Container fixed>
          <Grid container>
            <Grid item xs={8}>
              <List dense className={classes.headerList}>
                <ListItem className={classes.headerListLeft}>
                  <Avatar className={classes.contact}>
                    <CallIcon style={{ fontSize: 18 }} className={classes.ColorBlue} />
                  </Avatar>
                  <Link href='tel:+919822010741' className={classes.ListItemText} >+91 98220 10741</Link>
                </ListItem>
                <ListItem className={classes.headerListLeft}>
                  <Avatar className={classes.contact}>
                    <EmailIcon style={{ fontSize: 18 }} className={classes.ColorBlue} />
                  </Avatar>
                  <Link href='mailto:info@infinaindia.com' className={classes.ListItemText}>info@infinaindia.com</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <SocialMedia />
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Typography component='div' className={classes.mainNav}>
        <Container fixed>
          <Box display='flex' alignItems='center' >
            <Typography variant="h5" component='div' noWrap className={classes.title}>
              <ListItem button to='/' className={classes.logoLink} component={NavLink} key='home' >
                <img src="./logo.png" alt="Logo" height={90} />
              </ListItem>
            </Typography>
            {headerRoutes.map((page) => (
              <Typography variant="h6" noWrap color='textPrimary' className={classes.headerItems}>
                <ListItem button to={page['link']} activeClassName={classes.active} className={classes.linkItem} component={NavLink} key={page['text']} >
                  <ListItemText primary={page["text"]} />
                </ListItem>
              </Typography>
            ))}
            <Box>
              <ListItem button to='/registration' className={classes.linkButton} component={NavLink} key='registration' >
                <img src='./registration.png'></img>
                <Typography variant='body1' component='span' >
                  Registration
                </Typography>
              </ListItem>
            </Box>
            <Box marginLeft={1}>
              <ListItem button to='/login' className={classes.linkButton} component={NavLink} key='login' >
                <img className='loginButton' src='./login.png'></img>
                <Typography variant='body1' component='span'  >
                  Login
                </Typography>
              </ListItem>
            </Box>
            <Box marginLeft={1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => { layoutContext.setopen(!layoutContext.open) }}
                className={clsx(layoutContext.open && classes.hide, classes.navButton)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Typography>
      <Typography className={classes.floatingMenu} component='div'>
        <List>
          <ListItem className={classes.callIcon}>
            <Link href='tel:+919822010741' >
              <CallIcon />
            </Link>
          </ListItem>
          <ListItem className={classes.whatsAppIcon}>
            <Link href='https://api.whatsapp.com/send?phone=+919822011650&text=Hello' target='blank'>
              <WhatsAppIcon />
            </Link>
          </ListItem>
          <ListItem className={classes.emailIcon}>
            <Link href='mailto:info@infinaindia.com'>
              <EmailIcon />
            </Link>
          </ListItem>
        </List>
      </Typography>
    </AppBar>
  );
}
export default Header;