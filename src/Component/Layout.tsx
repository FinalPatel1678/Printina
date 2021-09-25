import React from "react";
import ResponsiveDrawer from "./Drawer";
import Header from "./AppBar";
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import { useLayoutContext } from "../Contexts/LayoutContext";
import clsx from "clsx";
import Footer from "./Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: 0,
    },
  }));
const Layout: React.FC<{}> = ({ children }: React.PropsWithChildren<{}>) => {

  const classes = useStyles();
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography component='div' className='root'>
        <Header />
        <main
          className={classes.content}
        >
          <div className={classes.drawerHeader} />          
          {children}
        </main>
        <ResponsiveDrawer />
        <Footer />
      </Typography>
    </ThemeProvider>
  )
}
export default Layout;

