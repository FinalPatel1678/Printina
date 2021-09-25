import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ListItem, Avatar, List } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(() =>
  createStyles({
    contactInfo: {
      display: 'flex',
      justifyContent: 'end',
      '& li': {
        padding: 0,
        margin: '0px 4px',
        width: 'fit-content',
        '& svg': {
          fontSize: 18
        }
      }
    },
    facebook: {
      cursor: 'pointer',
      width: 30,
      height: 30,
      backgroundColor: '#337ab7',
    },
    pinterest: {
      cursor: 'pointer',
      width: 30,
      height: 30,
      backgroundColor: '#ab0a1b'
    },
    youTube: {
      cursor: 'pointer',
      width: 30,
      height: 30,
      backgroundColor: '#e40202'
    },
    linkIn: {
      cursor: 'pointer',
      width: 30,
      height: 30,
      backgroundColor: '#006aa6'
    },
    instagram: {
      cursor: 'pointer',
      width: 30,
      height: 30,
      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
    },
  }),
);

interface Props {
  showFollowUs?: boolean
}

const SocialMedia: React.FC<Props> = (props: Props) => {

  const classes = useStyles();

  return (
    <List dense className={classes.contactInfo}>
      {props.showFollowUs && <ListItem >
        <Typography variant='subtitle1'> Follow us</Typography>
      </ListItem>}
      <ListItem >
        <Avatar className={classes.facebook}>
          <FacebookIcon />
        </Avatar>
      </ListItem>
      <ListItem >
        <Avatar className={classes.pinterest}>
          <PinterestIcon />
        </Avatar>
      </ListItem>
      <ListItem >
        <Avatar className={classes.instagram}>
          <InstagramIcon />
        </Avatar>
      </ListItem>
      <ListItem >
        <Avatar className={classes.linkIn}>
          <LinkedInIcon />
        </Avatar>
      </ListItem>
      <ListItem >
        <Avatar className={classes.youTube}>
          <YouTubeIcon />
        </Avatar>
      </ListItem>
    </List>
  );
}
export default SocialMedia;