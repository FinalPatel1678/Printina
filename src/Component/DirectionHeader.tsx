import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles(() =>
  createStyles({
    innerHeader: {
      background: 'url(./images/background/direction-header-bg.jpg) no-repeat center !important',
      padding: '35px 0'
    }
  }),
);

const DirectionHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography component='section' className={classes.innerHeader}>
      <Typography variant='h4' color='initial'>
        About us
      </Typography>
    </Typography>
  );
}
export default DirectionHeader;