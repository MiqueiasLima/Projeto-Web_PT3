const Animal = require('../models/animalModels');


module.exports = {

   async index(req,res){
        const animals = await Animal.find();
        res.json(animals);
    },
    
    async create(req,res){
        
        const {nome_pet,proprietario_pet,especie_pet,raca_pet,
        pelagem_pet,sexo_pet,peso_pet,idade_pet} = req.body;

        let data = {};
        
        let animals = await Animal.findOne({nome_pet});
        if(!animals){
            data = {nome_pet,proprietario_pet,especie_pet,raca_pet,
                pelagem_pet,sexo_pet,peso_pet,idade_pet};
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
        const {_id,nome_pet,proprietario_pet,especie_pet,raca_pet,
            pelagem_pet,sexo_pet,peso_pet,idade_pet} = req.body;
       
            const data = {nome_pet,proprietario_pet,especie_pet,raca_pet,
            pelagem_pet,sexo_pet,peso_pet,idade_pet};

        const animals = await Animal.findOneAndUpdate({_id},data,{new:true});
        return res.json(animals);


    },
    
}