import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { headerRoutes } from '../routes';


const useStyles = makeStyles(() =>
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
    },
    activeLink: {
      color: '#a7e0ff'
    }
  }),
);

const DirectionHeader: React.FC<any> = (props: any) => {
  const classes = useStyles();
  const path = window.location.pathname
  const [route, setRoute] = useState<string>('')

  useEffect(() => {
    headerRoutes.map((route) => {
      if (route['link'] === path) {
        setRoute(route["text"])
      }
    })

  }, [])

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