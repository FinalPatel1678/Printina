import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>Home.tsx</React.Fragment>
  );
}
export default Home;