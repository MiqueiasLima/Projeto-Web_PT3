const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({

    nome_pet:String,
    proprietario_pet:String,
    especie_pet:String,
    raca_pet:String,
    pelagem_pet:String,
    sexo_pet:String,
    peso_pet:{type:Number,default:0},
    idade_pet:{type:Number,default:0},

},{
    timestamps:true
});


const animal = mongoose.model('Animal',DataSchema);
module.exports = animal;