import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


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

  lines_tables:{
    fontWeight:'bold'
  }

}));

function cadastroAnimal(){
  window.location.href = '/admin/animais/cadastrar'
}

export default function AnimaisList() {
  const classes = useStyles();

  const[animais,setAnimais] = useState([]);

  useEffect(()=>{
      async function loadAnimais(){
            const response = await api.get("/api/animal");
            setAnimais(response.data);  
      }
      loadAnimais();
  },[])

  return (
    <div className={classes.root}>

      <MenuAdmin title={'Lista de Animais'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>

                <h2>Listagem de Animais</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead >
                          <TableRow >
                            
                            <TableCell className = {classes.lines_tables}>Nome_PET</TableCell>
                            <TableCell className = {classes.lines_tables}>Proprietario</TableCell>
                            <TableCell className = {classes.lines_tables}>Espécie</TableCell>
                            <TableCell className = {classes.lines_tables}>Raça</TableCell>
                            <TableCell className = {classes.lines_tables}>Pelagem</TableCell>
                            <TableCell className = {classes.lines_tables}>Sexo</TableCell>
                            <TableCell className = {classes.lines_tables}>Peso(kg)</TableCell>
                            <TableCell className = {classes.lines_tables}>Idade</TableCell>
                            <TableCell className = {classes.lines_tables}>Opções</TableCell>
                            
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {animais.map((row) => (
                            <TableRow key={row._id}>
                              <TableCell component="th" scope="row">
                                {row.nome_pet}
                              </TableCell>
                              <TableCell>{row.proprietario_pet}</TableCell>
                              <TableCell>{row.especie_pet}</TableCell>
                              <TableCell>{row.raca_pet}</TableCell>
                              <TableCell>{row.pelagem_pet}</TableCell>
                              <TableCell>{row.sexo_pet}</TableCell>
                              <TableCell>{row.peso_pet}</TableCell>
                              <TableCell>{row.idade_pet}</TableCell>
                              <TableCell>Botões</TableCell>
                              
                            </TableRow>
                          ))}
                          
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
              <br></br>
              <Button variant="contained" color="primary" onClick ={cadastroAnimal}>
            Novo Cadastro
          </Button>
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