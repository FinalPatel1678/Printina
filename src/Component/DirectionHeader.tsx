import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes, { IRoute } from '../routes';


const useStyles = makeStyles((theme: Theme) =>
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
      [theme.breakpoints.down('xs')]: {
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
  const url = useLocation()
  const [currentRoutes, setCurrentRoutes] = useState<IRoute[]>([])

  useEffect(() => {
    const currentPathNames = url.pathname.split('/')
    const tempCurrentRoutes: IRoute[] = []
    currentPathNames.map((pathName) => {
      routes.map((route) => {
        if (route.link.substring(1) === pathName || route.link.substring(1) === `products/${pathName}`) {
          tempCurrentRoutes.push(route)
        }
      })
    })
    setCurrentRoutes(tempCurrentRoutes)
  }, [url.pathname])

  if (url.pathname === '/') {
    return null
  }

  return (
    <Typography component='section' className={classes.innerHeader}>
      <Typography variant='h4' color='initial'>
        {currentRoutes.length ? <b> {currentRoutes.reverse()[0].text} </b> : null}
      </Typography>
      <List dense >
        {currentRoutes.map((route, index) =>
          <ListItem button to={route.link} activeClassName={currentRoutes.length - 1 === index ? classes.activeLink : ''} component={NavLink} key={route.text} >
            &nbsp;&nbsp; {route.text}&nbsp;&nbsp; {currentRoutes.length - 1 === index ? null : '|'}
          </ListItem>
        )}
      </List>
    </Typography >
  );
}
export default DirectionHeader;