import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, {  } from 'react';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '50px 0',
    },
    formDetails: {
      border: '5px solid #000'
    }
  }),
);

const GetInTouchWithUs: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography component='div' className={classes.root}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Typography variant='h5'><b>Corporate Address :</b></Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formDetails}>
            <Typography variant='h5'><b>Get in touch with us</b></Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
export default GetInTouchWithUs;