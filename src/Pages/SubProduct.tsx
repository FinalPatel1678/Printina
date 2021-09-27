import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const SubProduct: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>SubProduct.tsx</React.Fragment>
  );
}
export default SubProduct;