var fs = require('fs');

fs.readdir('data', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('newData.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});