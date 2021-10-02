import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, InputBase, Link, Paper, TextField } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import routes from '../routes';
import SocialMedia from './Social Media';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '50px 0',
    },
    formRoot: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    details: {
      padding: '22px 30px 12px 12px !important',
      '& form': {
        widtg: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 40
      },
      '& ul': {
        justifyContent: 'start',
        marginTop: 30,
        marginBottom: 30
      },
    },
    formDetails: {
      border: '5px solid #e8e8e8',
      padding: '22px 30px !important',
      textAlign: 'center',
      height: 'fit-content'
    },
    title: {
      marginBottom: 10,
    },
    subTitle: {
      marginBottom: 5,
      marginTop: 15
    },
    ListItemText: {
      cursor: 'pointer',
      '&:hover': {
        color: '#337ab7',
        textDecoration: 'none'
      },
    },
    submitBtn: {
      marginTop: 30,
      borderRadius: 4,
      height: 40,
      width: 130,
      borderBottom: 0,
      justifyContent: 'center',
      color: '#fff',
      background: 'linear-gradient(to right, rgba(59,172,233,1) 0%, rgba(1,121,185,1) 100%)',
      '&:hover': {
        background: '#F58220',
      },
    },
    suscribeBtn: {
      borderRadius: 4,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      height: 38,
      width: 130,
      justifyContent: 'center',
      color: '#fff',
      background: 'linear-gradient(to right, rgba(59,172,233,1) 0%, rgba(1,121,185,1) 100%)',
      '&:hover': {
        background: '#F58220',
      },
      boxShadow: 'none'
    },
    input: {
      padding: '6px 12px',
      fontSize: 14,
      height: 24,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      border: '1px solid #ccc',
      borderRadius: 4,
      '&:focus': {
        borderColor: '#1f52a4'
      },
    },
    inputWraper: {
      width: '100%'
    }
  }),
);

const GetInTouchWithUs: React.FC = () => {
  const classes = useStyles();
  const path = useLocation()
  const [shouldVisible, setShouldVisible] = useState<boolean>(false)

  useEffect(() => {
    setShouldVisible(false);
    (["/contact-us", "/"] as string[]).map((route: string) => {
      if (route === path.pathname) {
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
          <Grid item xs={12} md={6} className={classes.details}>
            <Typography variant='h5' className={classes.title}><b>Corporate Address :</b></Typography>
            <Typography variant='h6' className={classes.subTitle} color='primary'><b>Printina India</b></Typography>
            <Typography variant='subtitle1' color='textPrimary'>
              14, Parvati Industrial Estate, Opp. Adinath Society,<br></br>
              Pune – Satara Road, Pune – 411009. Maharashtra, India<br></br>
            </Typography>
            <Link href='tel:+91 20 24224123' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
              +91 20 24224123 /
            </Link>
            <Link href='tel:+91 20 24228308' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
              +91 20 24228308
            </Link>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>North India Zone</b></Typography>
                <Link href='tel:+91 98220 11650' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
                  +91 98220 11650  Ms. Radhika<br></br>
                  (B2B- Sales & Marketing)
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>South India Zone</b></Typography>
                <Link href='tel:+91 98220 10741' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
                  +91 98220 10741  Mr. Rupesh Masson<br></br>
                  (Business Development - B2B)
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>East India Zone</b></Typography>
                <Link href='tel:+91 98220 11650' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
                  +91 98220 11650  Ms. Radhika<br></br>
                  (B2B- Sales & Marketing)
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>West India Zone</b></Typography>
                <Link href='tel:+91 98220 10741' variant='subtitle1' color='textPrimary' className={classes.ListItemText}>
                  +91 98220 10741  Mr. Rupesh Masson<br></br>
                  (Business Development - B2B)
                </Link>
              </Grid>
            </Grid>
            <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>You can also enquire on :</b></Typography>
            <Link href='mailto:info@infinaindia.com' color='textPrimary' variant='subtitle1' className={classes.ListItemText}>info@infinaindia.com</Link>
            <Typography variant='subtitle1' className={classes.subTitle} color='primary'><b>Timings :</b></Typography>
            <Typography variant='subtitle1' color='textPrimary'>
              10:00 am to 7:00 pm ( Monday To Saturday )
            </Typography>
            <Typography component='form'>
              <InputBase
                className={classes.inputWraper}
                placeholder="Enter email here"
                classes={{ input: classes.input }}
              />
              <Button className={classes.suscribeBtn} variant="contained" color="primary">Subscribe</Button>
            </Typography>
            <SocialMedia />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formDetails}>
            <Typography variant='h5' className={classes.title}><b>Get in touch with us</b></Typography>
            <form className={classes.formRoot} noValidate autoComplete="off">
              <TextField label="Name*" />
              <TextField label="Company Name*" />
              <TextField label="Email*" />
              <TextField label="Mobile*" />
              <TextField label="Message*" multiline rowsMax={4} rows={4} />
              <Button className={classes.submitBtn} variant="contained" color="primary">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
export default GetInTouchWithUs;