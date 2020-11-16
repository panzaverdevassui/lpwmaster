const express = require('express');
const app = express();

const path = require('path');

app.listen(3610, () => {
    console.log('Aplicacion corriendo en el puerto 3610')
});

app.use(express.static(__dirname + '/public'));

//Routes o rutas
app.get('/', (request, response) => {
       response.sendFile(path.resolve(__dirname, 'index.html'))
});


app.get('/', (request, response) => {
    response.json({
        nombre: 'Alberto Zuluaga'
    })
});


/* app.get('/', (req, res) =>res.send('Hello Word')); */

/* app.get('/', (req, res) =>res.senFile('index.html')); */
/* app.listen(3610); */
/* console.log('Server on port', 3610); */