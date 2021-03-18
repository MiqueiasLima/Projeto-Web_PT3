import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Pets from '@material-ui/icons/Pets';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Pets/>
      </ListItemIcon>
      <ListItemText primary="Animais" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Configurações</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);