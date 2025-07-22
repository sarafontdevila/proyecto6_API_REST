const mongoose = require ("mongoose");
const Recurso = require ("../../api/models/recursos")
const recursos = require("../../data/recursos")


const semillaRecurso = async () => { 
  try {
    await mongoose.connect("mongodb+srv://sfontdevila:ZUXAAByMdFZ0XC1K@cluster0.wfzn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    await Recurso.collection.drop()
    console.log("se ha borrado la coleccion recursos")

    await Recurso.insertMany(recursos)
    console.log("se han insertado los recursos")

    await mongoose.disconnect()
    console.log("se ha desconectado bbdd")
  } catch (error) {
    console.log("error")
  }
}

semillaRecurso()