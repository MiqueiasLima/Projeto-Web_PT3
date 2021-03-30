import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'; 

//Imports Admin
import DashBoard from './pages/admin/dashboard'
import Animais from './pages/admin/animais';
import EditarAnimais from './pages/admin/animais/editarAnimais';
import CadastrarAnimais from './pages/admin/animais/animaisCadastro';

export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                
                {/*Rotas do Admin*/}
                <Route path = "/" exact component = {Animais}/>
                <Route path = "/admin" exact component = {DashBoard}/>
                <Route path = "/admin/animais" exact component = {Animais}/>
                <Route path = "/admin/animais/cadastrar" exact component = {CadastrarAnimais}/>
                <Route path = "/admin/animais/editar/:idAnimal" exact component = {EditarAnimais}/>
                

            </Switch>
        </BrowserRouter>
    )
}


