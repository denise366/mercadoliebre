const express = require ("express")
const app = express()
const port = process.env.PORT || 3000;



/* inicializo PORT en render o servidor 3033 ruta localhost:3033 */

app.listen (port, () => 
    console.log(`Servidor corriendo en Puerto ${port}`)
);
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