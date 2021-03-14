const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

DataSchema.pre('save',function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario  = bcrypt.hashSync(this.senha_usuario,10);
    next();

});

DataSchema.pre('findOneAndUpdate',function(next){

    var password = this.getUpdate().senha_usuario + '';
    if(password.length < 55){
        this.getUpdate().senha_usuario = bcrypt.hashSync(password,10);
    }
    next();
})

const animal = mongoose.model('Animal',DataSchema);
module.exports = animal;