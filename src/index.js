require('dotenv').config();

const app = require('./server');
require('./db');

app.listen(app.get('port'), () => {
	console.log('Servidor el puerto', app.get('port'));
});
