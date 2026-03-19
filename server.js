const express = require('C:/Users/armen/.openclaw/workspace/neela-commerce/node_modules/express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
app.listen(4500, () => console.log('P&R site live at http://127.0.0.1:4500'));
