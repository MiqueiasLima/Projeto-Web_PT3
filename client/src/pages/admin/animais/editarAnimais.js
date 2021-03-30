import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import api from '../../../services/api';
import Copyright from '../../../componnents/footer-admin';
import MenuAdmin from '../../../componnents/menu-admin';
import useStyles from '../../../estilos/estilos'

export default function CadastroDeAnimais() {
  const classes = useStyles();
  
  const [nome_pet,setNome_pet] = useState('');
  const [proprietario_pet,setProprietario_pet] = useState('');
  const [especie_pet,setEspecie_pet] = useState('');
  const [raca_pet,setRaca_pet] = useState('');
  const [pelagem_pet,setPelagem_pet] = useState('');
  const [sexo_pet,setSexo_pet] = useState('');
  const [peso_pet,setPeso_pet] = useState('');
  const [idade_pet,setIdade_pet] = useState('');

  const {idAnimal} = useParams();

  useEffect(() =>{
    async function getUsuario(){
    var response = await api.get("/api/animal.details/"+idAnimal)
     console.log(response.data);
    setNome_pet(response.data.nome_pet);
    setProprietario_pet(response.data.proprietario_pet);
    setEspecie_pet(response.data.especie_pet);
    setRaca_pet(response.data.raca_pet);
    setPelagem_pet(response.data.pelagem_pet);
    setSexo_pet(response.data.sexo_pet);
    setPeso_pet(response.data.peso_pet);
    setIdade_pet(response.data.idade_pet);
    }
    getUsuario();

  },[])


  async function handleSubmit(){



    const data = {nome_pet:nome_pet,
                  proprietario_pet:proprietario_pet,
                  especie_pet:especie_pet,
                  raca_pet:raca_pet,
                  pelagem_pet:pelagem_pet,
                  sexo_pet:sexo_pet,
                  peso_pet:peso_pet,
                  idade_pet:idade_pet,
                  _id:idAnimal,
                }


      if(nome_pet !== '' && proprietario_pet !== '' && especie_pet !== '' && raca_pet !== ''
      && pelagem_pet !== '' && sexo_pet !== '' && peso_pet !== '' && idade_pet !== ''){
          
        const response = await api.put('/api/animal',data);
        
        if(response.status === 200){
          window.location.href = '/admin/animais'
        }
        else{
          alert('Erro ao atualizar o usuário');
        }
      }else{
        alert("Preencha todos os campos");
      }
    
  }


  return (
    <div className={classes.root}>
     
      <MenuAdmin title = {'PET'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <h2>Atualização de Cadastro</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nome_pet"
            name="nome_pet"
            label="Nome PET"
            fullWidth
            autoComplete='none'
            value = {nome_pet}
            onChange = {e => setNome_pet(e.target.value)}
            
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
            value = {proprietario_pet}
            onChange = {e => setProprietario_pet(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="especie_pet"
            name="especie_pet"
            label="Espécie"
            fullWidth
            value = {especie_pet}
            onChange = {e => setEspecie_pet(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="raca_pet"
            name="raca_pet"
            label="Raça"
            fullWidth
            value = {raca_pet}
            onChange = {e => setRaca_pet(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pelagem_pet"
            name="pelagem_pet"
            label="Pelagem"
            fullWidth
            value = {pelagem_pet}
            onChange = {e => setPelagem_pet(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sexo_pet"
            name="sexo_pet"
            label="Sexo"
            fullWidth
            value = {sexo_pet}
            onChange = {e => setSexo_pet(e.target.value)}
            
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
            value = {peso_pet}
            onChange = {e => setPeso_pet(e.target.value)}
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
            value = {idade_pet}
            onChange = {e => setIdade_pet(e.target.value)}
          />
          </Grid>
          <Grid item xs = {12} sm ={12}>
          <Button variant="contained" color="primary" onClick = {handleSubmit}>
            Salvar Cadastro
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