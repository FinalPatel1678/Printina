import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const ContactUs: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>Contact us.tsx</React.Fragment>
  );
}
export default ContactUs;