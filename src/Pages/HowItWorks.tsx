import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const HowItWorks: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>HowItWorks.tsx</React.Fragment>
  );
}
export default HowItWorks;