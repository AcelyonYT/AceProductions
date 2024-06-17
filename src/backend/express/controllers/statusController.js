export default class StatusController {
    constructor() {}

    renderStatusPage(req, res) {
        res.sendFile( "C:\\Users\\Epicg\\Documents\\GitHub\\AceProductions\\dist\\index.html" );
    }
}