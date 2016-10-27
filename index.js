const server = require('./lib/serverHttp');
const port = 65000

server.listen(port, err => {
    if (err) console.log('Error: ', err)
    else console.log('Server is listening on port: ', port);
});
