const Usuario = require('../models/usuarioModels');


module.exports = {

   async index(req,res){
        const animal = await Usuario.find();
        res.json(animal);
    },
    
    async create(req,res){
        
        const {nome_usuario,email_usuario,tipo_usuario,senha_usuario} = req.body;

        let data = {};
        
        let animal = await Usuario.findOne({email_usuario});
        if(!animal){
            data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
            animal = await Usuario.create(data);
            return res.status(200).json(animal);

        }else{
            return res.status(500).json(animal);
        }
    },

   async details(req,res){
        const {_id} = req.params;
        const animal = await Usuario.findOne({_id});
        return res.json(animal);
    },

    async delete(req,res){
        const {_id} = req.params;
        const animal = await Usuario.findByIdAndDelete({_id});
        return res.json(animal);
    },

    async update(req,res){
        const {_id,nome_usuario,email_usuario,senha_usuario,tipo_usuario} = req.body;
        const data = {nome_usuario,email_usuario,senha_usuario,tipo_usuario};

        const animal = await Usuario.findOneAndUpdate({_id},data,{new:true});
        return res.json(animal);

    },
    
}