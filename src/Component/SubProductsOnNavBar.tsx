import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, ListItem } from '@material-ui/core';
import { subProductRoutes } from '../routes';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            opacity: '95%'
        },
        paper: {
            padding: theme.spacing(1),
        },
        wrapper: {
            height: '100%',
            width: '100%'
        },
        pageLink: {
            width: '100%',
            color:'#fff',
            backgroundColor: '#43a7dc',
            borderRadius: 4,
            '& :hover':{
                backgroundColor:'#43a7dc !important'
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
                <Grid container spacing={2}>
                    {subProductRoutes.map((route) =>
                        <Grid item xs={4} key={route.text}>
                            <Typography component='div' className={classes.wrapper}>
                                <ListItem className={classes.pageLink} button to={route.link} component={NavLink} >
                                    {route.text}
                                </ListItem>
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Popover>
        </React.Fragment>
    );
}

export default SubProductsOnNavBar
