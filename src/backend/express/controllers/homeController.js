export default class HomeController {
    constructor() {}

    renderHomePage( req, res ) {
        res.sendFile( "C:\\Users\\Epicg\\Documents\\GitHub\\AceProductions\\dist\\index.html" );
    }
}