import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, ListItem, MenuItem } from '@material-ui/core';
import { subProductRoutes } from '../routes';
import { NavLink } from 'react-router-dom';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            opacity: '95%',
        },
        paper: {
            padding: theme.spacing(3),
            width: 'fit-content'
        },
        wrapper: {
            width: '100%',
            height: 35,
            marginBottom: 15,
            '& svg':{
                fontSize:12
            }
        },
        pageLink: {
            width: '100%',
            color: '#fff',
            backgroundColor: '#43a7dc',
            borderRadius: 4,
            '&:hover': {
                backgroundColor: '#43a7dc !important'
            }
        }
    }),
);

const SubProductsOnNavBar: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <React.Fragment>
            <Typography
                onMouseEnter={handlePopoverOpen}
            >
                {children}
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Container fixed>
                    <Grid container spacing={4}>
                        {subProductRoutes.map((route) =>
                            <Grid item xs={4} key={route.text}>
                                <Typography component='div' className={classes.wrapper}>
                                    <ListItem className={classes.pageLink} button to={route.link} component={NavLink} >
                                        {route.text}
                                    </ListItem>
                                </Typography>
                                {route.hashLink && route.hashLink.map((link) =>
                                    <MenuItem key={link.text} >
                                        <DoubleArrowIcon fontSize='small' />{link.text}</MenuItem>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Popover>
        </React.Fragment>
    );
}

export default SubProductsOnNavBar
