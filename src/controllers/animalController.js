const Animal = require('../models/animalModels');


module.exports = {

   async index(req,res){
        const animals = await Animal.find();
        res.json(animals);
    },
    
    async create(req,res){
        
        const {nome_usuario,email_usuario,tipo_usuario,senha_usuario} = req.body;

        let data = {};
        
        let animals = await Animal.findOne({email_usuario});
        if(!animals){
            data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
            animals = await Animal.create(data);
            return res.status(200).json(animals);

        }else{
            return res.status(500).json(animals);
        }
    },

   async details(req,res){
        const {_id} = req.params;
        const animals = await Animal.findOne({_id});
        return res.json(animals);
    },

    async delete(req,res){
        const {_id} = req.params;
        const animals = await Animal.findByIdAndDelete({_id});
        return res.json(animals);
    },

    async update(req,res){
        const {_id,nome_usuario,email_usuario,senha_usuario,tipo_usuario} = req.body;
        const data = {nome_usuario,email_usuario,senha_usuario,tipo_usuario};

        const animals = await Animal.findOneAndUpdate({_id},data,{new:true});
        return res.json(animals);

    },
    
}