const express = require('express');
const app = express();
app.use(express.static('./dist/terminespa'));
app.get('/*', (req, res) =>
 res.sendFile('index.html', {root: 'dist/terminespa/'}),
);
app.listen(process.env.PORT || 8080);