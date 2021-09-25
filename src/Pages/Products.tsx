import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const Products: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>Products.tsx</React.Fragment>
  );
}
export default Products;