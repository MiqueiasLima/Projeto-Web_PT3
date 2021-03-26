import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import api from '../../../services/api';
import Copyright from '../../../componnents/footer-admin';
import MenuAdmin from '../../../componnents/menu-admin';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
 
}));