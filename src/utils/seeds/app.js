const mongoose = require ("mongoose");
const App = require ("../../api/models/apps")
const apps = require("../../data/apps")


const semillaApp = async () => { 
  try {
  await mongoose.connect("mongodb+srv://sfontdevila:ZUXAAByMdFZ0XC1K@cluster0.wfzn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  await App.collection.drop()
  console.log("se ha borrado la coleccion apps")

  await App.insertMany(apps)
  console.log("se han insertado los apps")

  await mongoose.disconnect()
  console.log("se ha desconectado bbdd")
} catch (error) {
  console.log("error")
  
} 
  }

semillaApp();