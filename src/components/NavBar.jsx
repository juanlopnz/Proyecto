import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Person, Favorite, Search } from '@material-ui/icons';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fafafa',
    color: theme.palette.text.primary,
  },
  grow: {
    flexGrow: 1,
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Logo o título de la aplicación */}
        <Typography variant="h6" className={classes.grow}>
          Mi Aplicación
        </Typography>

        {/* Enlaces de navegación */}
        <div>
          <IconButton color="inherit" className={classes.iconButton} href="/perfil">
            <Person />
          </IconButton>
          <IconButton color="inherit" className={classes.iconButton} href="/me-gusta">
            <Favorite />
          </IconButton>
          <IconButton color="inherit" className={classes.iconButton} href="/buscar">
            <Search />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
