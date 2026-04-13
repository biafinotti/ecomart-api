const app = require('./app');

const PORT = 3001;



app.listen(PORT, () => {

    // Usando crase para que o ${PORT} funcione corretamente

    console.log(`EcoMart API rodando em http://localhost:${PORT}`);

});