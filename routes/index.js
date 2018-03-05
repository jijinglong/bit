const express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {
    var html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Bit</title>
        </head>
        <body>
            <div id="root"></div>
            <script type="text/javascript" src="dist/bundle.js"></script>
        </body>
        </html>
    `;
    return res.end(html);
});

module.exports = router;
