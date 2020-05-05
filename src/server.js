let express = require('express'),
    app = express(),
    log = require('debug')('server')
require('debug').enable('server*');

app.listen(80, () => {
    log("Listening on port 80");
});
