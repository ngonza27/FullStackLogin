import app from './app';
import './database';
import dotenv from 'dotenv';
dotenv.config();

function init() {
    app.listen(app.get('port'));
    console.log('Server on port', 4000);
};

init();