const mongoose =require("mongoose")
const { boolean } = require("webidl-conversions")

const appSchema = new mongoose.Schema({
  nombre:{type:String, required:true},
  imagen:{type:String, required:true},
  versionGratis:{type:String, required:true},
  precioPro:{type:Number, required:true},
  tema:{type:String, required:true, 
    enum:
    [ "presentaciones",
      "videos", 
      "musica",
      "codigo"
    ]
      },
},
{
  timestamps:true,
  collection:"apps"
})

const App = mongoose.model("apps",appSchema, "apps")
module.exports = App
