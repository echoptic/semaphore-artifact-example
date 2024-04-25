const fs = require('node:fs');

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

fs.writeFileSync('dist/hello.html', '<h1>Hello, world!</h1>');
