import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';



import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


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

export default function CadastroDeAnimais() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
     
      <MenuAdmin title = {'PET'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <h2>Formulário de Cadastro</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nome_pet"
            name="nome_pet"
            label="Nome PET"
            fullWidth
            autoComplete='none'
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="proprietario_pet"
            name="proprietario_pet"
            label="Proprietario PET"
            fullWidth
            autoComplete="given-name"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="especie_pet"
            name="especie_pet"
            label="Espécie"
            fullWidth
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="raca_pet"
            name="raca_pet"
            label="Raça"
            fullWidth
           
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pelagem_pet"
            name="pelagem_pet"
            label="Pelagem"
            fullWidth
           
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sexo_pet"
            name="sexo_pet"
            label="Sexo"
            fullWidth
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            type = 'Number'
            id="peso_pet"
            name="peso_pet"
            label="Peso"
            fullWidth
            autoComplete="none"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            type = 'Number'
            id="idade_pet"
            name="idade_pet"
            label="Idade"
            fullWidth
            autoComplete="none"
          />
          </Grid>
         
        </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}