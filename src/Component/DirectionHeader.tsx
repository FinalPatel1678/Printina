import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../routes';


const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    innerHeader: {
      background: 'url(./images/background/direction-header-bg.jpg) no-repeat center !important',
      padding: '35px 0',
      marginTop: 10,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& ul': {
        padding: "10px 0 0 0",
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '& a': {
          padding: 0,
          width: 'fit-content',
          fontSize: 13
        }
      },
      [theme.breakpoints.down(600)]: {
        '& b': {
          fontSize: 30
        }
      },
    },
    activeLink: {
      color: '#a7e0ff'
    }
  }),
);

const DirectionHeader: React.FC<any> = (props: any) => {
  const classes = useStyles();
  const path = useLocation()
  const [route, setRoute] = useState<string>('')

  useEffect(() => {
    routes.map((route) => {
      if (route['link'] === path.pathname) {
        setRoute(route["text"])
      }
    })
  }, [path])

  if (path.pathname === '/') {
    return null
  }

  return (
    <Typography component='section' className={classes.innerHeader}>
      <Typography variant='h4' color='initial'>
        <b>{route}</b>
      </Typography>
      <List dense >
        <ListItem button to='/' component={NavLink} key='home' >
          Home&nbsp;&nbsp;|
        </ListItem>
        <ListItem button to={path} activeClassName={classes.activeLink} component={NavLink} key={route}>
          &nbsp;&nbsp;{route}
        </ListItem>
      </List>
    </Typography>
  );
}
export default DirectionHeader;