const {program} = require('commander');
const startProxyServer = require('./server.js');

program.option('--port <number>', 'set port number')
        .option('--origin <string>', 'set origin <url>')
        .option('--ttl <number>')
        .action((options) => {
            startProxyServer(options.port, options.origin, options.ttl);
        })

program.parse(process.argv);