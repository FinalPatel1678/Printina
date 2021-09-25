import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, List, ListItem } from '@material-ui/core';
import { footerTop, headerRoutes } from '../routes';
import { NavLink, useLocation } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#d7e7ff',
      padding: '50px 0',
    },
    title: {
      fontWeight: 600,
      marginBottom: 20,
      fontSize: 18
    },
    quickLinksTitle: {
      paddingLeft: 70,
      fontWeight: 600,
      marginBottom: 20,
      fontSize: 18
    },
    quickLinks: {
      padding: '0 70px !important',
      '& ul': {
        paddingTop: 0,
        paddingBottom: 0,
        '& a': {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          background: 'transparent !important',
        },
        '& a:hover': {
          color: '#333',
          fontWeight: 600,
          textDecoration: 'none'
        }
      },
    },
    links: {
      paddingRight: 10,
      width: '45%'
    },
    contact: {
      display: 'table',
      width: '100%',
    },
    contactIcon: {
      width: 54,
      display: 'table-cell',
      verticalAlign: 'top',
      '& svg': {
        fontSize: 22,
        padding: '12px 13px',
        backgroundColor: '#43a7dc',
        textAlign: 'center',
        lineHeight: 44,
        borderRadius: 4,
        color: '#fff'
      }
    },
    contactLink: {
      display: 'table-cell',
      verticalAlign: 'top',
      paddingLeft: 10,
      '& a': {
        fontSize: 15,
        color: '#444',
        display: 'block',
        textDecoration: 'none'
      },
      '& a:hover': {
        color: '#333',
        fontWeight: 600,
        textDecoration: 'none'
      }
    }
  }),
);

const FooterTop: React.FC = () => {
  const classes = useStyles();
  const path=useLocation()
  const [shouldVisible, setShouldVisible] = useState<boolean>(false)

  useEffect(() => {
    setShouldVisible(false)
    footerTop.map((route) => {
      if (route['link'] === path.pathname) {
        setShouldVisible(true)
      }
    })
  }, [path])

  if (!shouldVisible) {
    return null
  }

  return (
    <Typography component='div' className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography className={classes.title} variant='subtitle1'>Printina</Typography>
            <Typography component='p'> Since 1972, Printina is a goal-driven organization devoted to supporting the wide-ranging printing & media technology chain. We are a leading manufacturer of ground-breaking printing solutions, provide all categories of printing technologies comprising thermal transfer, direct thermal, inkjet, laser, and dot matrix.</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.quickLinksTitle} variant='subtitle1'>Quick Links</Typography>
            <Box display='flex' className={classes.quickLinks}>
              <Box className={classes.links}>
                <List dense>
                  {headerRoutes.map((page) => (
                    <ListItem button to={page['link']} component={NavLink} key={page['text']} >
                      {page["text"]}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box className={classes.links}>
                <List dense>
                  {headerRoutes.map((page) => (
                    <ListItem button to={page['link']} component={NavLink} key={page['text']} >
                      {page["text"]}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.title} variant='subtitle1'>Contact Us</Typography>
            <Typography component='p'>14/A, Parvati Industrial Estate, Opp. Adinath Society, Pune – Satara Road, Pune – 411009. Maharashtra, India</Typography>
            <Typography component='div' style={{ marginTop: 20 }} className={classes.contact}>
              <Typography component='div' className={classes.contactIcon}>
                <EmailIcon />
              </Typography>
              <Typography component='div' className={classes.contactLink}>
                <Link href='mailto:info@infinaindia.com'>info@infinaindia.com</Link>
              </Typography>
            </Typography>
            <Typography component='div' style={{ marginTop: 10 }} className={classes.contact}>
              <Typography component='div' className={classes.contactIcon}>
                <CallIcon />
              </Typography>
              <Typography component='div' className={classes.contactLink}>
                <Link href='tel:+919822010741'>+91 98220 10741</Link>
                <Link href='tel:+919822010741'>+91 98220 10741</Link>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
export default FooterTop;