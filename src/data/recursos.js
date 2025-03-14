const apps = require("../data/apps")

const recursos = [
  {
    nombre: "Visuales",
    imagen: "https://example.com/visuals.jpg",
    apps: [apps[0]._id, apps[1]._id, apps[2]._id, apps[3]._id]
  },
  {
    nombre: "Audio",
    imagen: "https://example.com/visuals.jpg",
    apps: [apps[4]._id, apps[5]._id]
  },
]
module.exports = recursos