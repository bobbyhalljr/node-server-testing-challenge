require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`SERVER is UP and RUNNING on port ${port}`)
})