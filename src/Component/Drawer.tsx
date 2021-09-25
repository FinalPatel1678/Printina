import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import { useLayoutContext } from '../Contexts/LayoutContext';
import { Avatar, IconButton, ThemeProvider, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { headerRoutes } from '../routes';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { createMuiTheme } from '@material-ui/core';
import SocialMedia from './Social Media';

const drawerWidth = 'fit-content';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      '& li': {
        color: '#ffffff'
      },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'end',
    },
    active: {
      background: theme.palette.action.selected
    },
    listItems: {
      background: 'linear-gradient(#333, #222)',
      '& a': {
        padding: '0 0 0 16px',
      },
      '& svg': {
        color: '#fff'
      },
      '& ul': {
        paddingTop: 4,
        paddingBottom: 4
      },
    }
  }),
);

const ResponsiveDrawer: React.FC<{}> = () => {
  const classes = useStyles();
  const layoutContext = useLayoutContext();
  const theme = useTheme();
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  });

  const handleDrawerToggle = () => {
    layoutContext.setopen(!layoutContext.open);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={layoutContext.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography component='div' className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </Typography>
        <List>
          {headerRoutes.map((page) => (
            <Typography component='div' className={classes.listItems} variant="h6" noWrap onClick={() => { layoutContext.setopen(!layoutContext.open) }}>
              <ListItem button to={page['link']} activeClassName={classes.active} component={NavLink} key={page['text']} >
                <ListItemText primary={page["text"]} />
              </ListItem>
            </Typography>
          ))}
          <Typography variant="h6" component='div' className={classes.listItems} noWrap onClick={() => { layoutContext.setopen(!layoutContext.open) }}>
            <SocialMedia showFollowUs={true}/>
          </Typography>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;