var fs = require('fs');
var readline = require('readline');
var _ = require('underscore');

// console.log(__dirname+'/../database/data_txt');

var lineReader = readline.createInterface({
    input: fs.createReadStream(__dirname+'/../database/data.txt')
});

var data = [];

lineReader.on('line', function (line) {
    data.push(line);
});

lineReader.on('end', function(){
   console.log('end');
});

lineReader.on('close', function(){
    console.log('close');
    data = _.groupBy(data, function(e){
       return parseInt(e.trim().split(' ')[1], 10);
    });
    data['1'].forEach(function(line){
        fs.appendFileSync(__dirname+'/../database/data.noun', line.toString() + "\n");
    });
    data['2'].forEach(function(line){
        fs.appendFileSync(__dirname+'/../database/data.adj', line.toString() + "\n");
    });
    data['3'].forEach(function(line){
        fs.appendFileSync(__dirname+'/../database/data.verb', line.toString() + "\n");
    });
    data['4'].forEach(function(line){
        fs.appendFileSync(__dirname+'/../database/data.adv', line.toString() + "\n");
    });
});


lineReader.on('error', function(){
    console.log('error');
});