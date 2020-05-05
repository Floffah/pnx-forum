let express = require('express'),
    app = express(),
    log = require('debug')('server'),
    mst = require('mustache-express'),
    path = require('path');
require('debug').enable('server*');

app.engine('mst', mst());

app.set('view engine', 'mst');
app.set('views', path.join(__dirname, '../media/views'));

app.use('/media', express.static(path.join(__dirname, '../media')));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home | PNX Forum"
    });
});

app.listen(80, () => {
    log("Listening on port 80");
});
