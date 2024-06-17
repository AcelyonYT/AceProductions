import express from 'express';
import home from './routes/home.js';
import status from './routes/status.js';
const app = express();

app.use( express.static( "C:\\Users\\Epicg\\Documents\\GitHub\\AceProductions\\dist" ) );
app.use( "/home", home);
app.use( "/status", status);

const port = 8080;
app.listen( port, () => {
    console.log(`Example app listening on port ${ port }`);
} );

export default app;