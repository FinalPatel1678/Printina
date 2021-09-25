import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({

  }),
);

const Blogs: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>Blogs.tsx</React.Fragment>
  );
}
export default Blogs;