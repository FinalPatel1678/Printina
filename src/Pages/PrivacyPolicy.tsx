import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import DirectionHeader from '../Component/DirectionHeader';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const PrivacyPolicy: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment><DirectionHeader></DirectionHeader></React.Fragment>
  );
}
export default PrivacyPolicy;