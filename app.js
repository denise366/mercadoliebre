const express = require ("express")
const app = express()

app.listen (3030, () => 
            console.log ("corriendo puerto 3030"))
const path = require ("path");
app.use(express.static(path.resolve(__dirname,("./Public"))))
app.get("/", function(req, res)
 {res.sendFile(path.resolve(__dirname,"./Views/home.html"))} )

 // Ruta para enviar el archivo login.html //
app.get("/login", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./Views/login.html"));
});

// Ruta para enviar el archivo register.html //
app.get("/register", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./Views/register.html"));
});