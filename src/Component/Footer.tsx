import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ListItem, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { footerRoutes } from '../routes';

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#194387',
      color: '#ffffff',
      padding: '15px 0px'
    },
    listItem: {
      padding: 0,
      margin: '0px 4px',
      width: 'fit-content'
    }
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box display='flex' justifyContent='center'>
        <Typography variant='subtitle2' component='p'>
          Copyright © 2021 Printina
        </Typography>
        {footerRoutes.map((footerRoute) => <ListItem button className={classes.listItem} to={footerRoute['link']} component={NavLink} key={footerRoute['text']} >
          <Typography variant='subtitle2' component='p' >
            | {footerRoute['text']}
          </Typography>
        </ListItem>)}
      </Box>
    </footer>
  );
}
export default Footer;