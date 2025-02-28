const Recurso = require("../models/recursos")

const getRecursos = async (req, res, next) => {
  try {
    const recursos = await Recurso.find().populate("apps");
    return res.status(200).json(recursos)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}

const getRecursosById = async (req, res, next) => {
  try {
    const {id }= req.params
    const recurso = await Recurso.findById(id).populate("apps")
    return res.status(200).json(recurso)
    
  } catch (error) {
    return res.status(400).json("Error en getByID")
    
  }
}
const postRecurso = async (req, res, next) => {
  try {
    console.log(req.body)
    const newRecurso = new Recurso(req.body)
    const recursoSaved = await newRecurso.save()
    return res.status(201).json(recursoSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}
const putRecurso = async (req, res, next) => {
  try {
    const { id }= req.params
    const newRecurso = new Recurso(req.body)
    newRecurso._id = id
    const recursoUpdated = await Recurso.findByIdAndUpdate(id, newRecurso, {new: true})
    return res.status(200).json(recursoUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}
const deleteRecurso = async (req, res, next) => {
  try {
    const {id }= req.params
    const recursoDeleted = await Recurso.findByIdAndDelete(id)
    return res.status(200).json(recursoDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getRecursos,
  getRecursosById,
  postRecurso,
  putRecurso,
  deleteRecurso
}