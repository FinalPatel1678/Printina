import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import GetInTouchWithUs from '../Component/GetInTouchWithUs';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const ContactUs: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment><GetInTouchWithUs /></React.Fragment>
  );
}
export default ContactUs;