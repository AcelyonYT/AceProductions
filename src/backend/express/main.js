import express from 'express';
const app = express();

app.use( express.static( "C:\\Users\\Epicg\\Documents\\GitHub\\AceProductions\\dist" ) );

import Home from './routes/home.js';
app.use( "/", Home );

const port = 8080;
app.listen( port, () => {
    console.log(`Example app listening on port ${ port }`);
} );

export default app;