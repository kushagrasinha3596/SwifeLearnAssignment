import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      fontSize: 'small',
      cursor: 'pointer'
    },
    loginButton: {
      backgroundColor: '#F77166',
      color: 'white',
      borderRadius: '16px'
    },
    gridHeaderContainer: {
      margin: '0px 0 5px 0',
      boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)'
    },
    gridConceptVidContainer: {
      margin: '0px 0 5px 0'
    },
    conceptVideos: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      cursor: 'pointer'
    },
    conceptVideosContainer: {
      marginLeft: '10%'
    },
    iconButton: {
      border: '1px solid grey'
    },
    paginationContainer: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      height: '10%'
    },
    paginationItem: {
      border: '1px solid grey',
      borderRadius: '10px'
    }
}));

const swifeLearn = () => {
    return (
      <div>
      <Grid container spacing={1}>
        {
          getHeader()
        }
        {
          getStudyOptions({
            title: 'Concept Videos',
            caption: 'Select a number'
          })
        }
        {
          getVideoLectures()
        }
        {
          getStudyOptions({
          title: 'Live Classes',
          caption: 'Select a number'
        })
        }
        {
          getPagination({
            paginationCount:10
          })
        }
      </Grid>
    </div>
    );
}

const getHeader = () => {
  const classes = useStyles();
  return (
    <Grid justify="flex-end"
      container
      item 
      xs={12}
      spacing={3}
      className={classes.gridHeaderContainer}>
      <Grid item xs={0.5}>
        <Typography className={classes.paper}>Live Consultation</Typography>
      </Grid>
      <Grid item xs={0.5}>
        <Typography className={classes.paper}>Buy Plans</Typography>
      </Grid>
      <Grid item xs={0.5}>
        <Typography className={classes.paper}>View Plans</Typography>
      </Grid>
      <Grid item xs={0.5}>
        <Button 
        className={classes.loginButton}
        variant="contained">
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

const getStudyOptions = (props) => {
  const classes = useStyles();
  return (
      <Grid 
      container
      item 
      xs={12}
      spacing={6}
      className={classes.gridConceptVidContainer}
      classes={{
        item: classes.conceptVideosContainer
      }}>
      <Grid ml={6} item xs={0.5}>
        <Typography 
        variant="h4"
        className={classes.conceptVideos}>{props.title}</Typography>
        <Typography 
        variant="caption"
        className={classes.conceptVideos}>{props.caption}</Typography>
      </Grid>
    </Grid>
  )
}

const getVideoLectures = () => {
  const classes = useStyles();
  return (
  <Grid 
      container
      item 
      xs={12}
      spacing={6}
      className={classes.gridConceptVidContainer}>
      <Grid item xs={1}>
         <IconButton className={classes.iconButton}>
      <ChevronLeftOutlinedIcon/>
      </IconButton>
      </Grid>
      <Grid item xs={10}>
        <Typography 
        variant="h4"
        className={classes.conceptVideos}>Concept Videos</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton  className={classes.iconButton}>
      <ChevronRightOutlinedIcon/>
      </IconButton>
      </Grid>
    </Grid>
  )
}

const getPagination = (props) => {
  const classes = useStyles();
  return (
    <Grid 
      container
      item 
      xs={12}
      spacing={6}
      className={classes.paginationContainer}
      justify="center">
      <Grid className={classes.paginationItem} item xs={6}>
      <Pagination 
      hideNextButton={true}
      hidePrevButton={true}
      count={props.paginationCount} shape="rounded" />
      </Grid>
    </Grid>
  );
}

export default swifeLearn;