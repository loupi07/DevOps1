import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: '2rem',
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.title}
          >
            Liste de films
          </Button>
          <Typography variant="h6" className={classes.title}>
            Créer un élément
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
