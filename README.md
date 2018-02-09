# WordNet.js

Simple Node.js module for accessing [CFILT's WordNet](http://www.cfilt.iitb.ac.in/wordnet/webhwn/) dictionary.

# Installation

    $ npm install wordnet-hi
    
# How to use

An example how to use the module is located in examples/lookup.js.

    var wordnet = require('wordnet-hi');
    
    wordnet.lookup('हवन', function(err, definitions) {
    
      definitions.forEach(function(definition) {
        console.log('  words: %s', definition.meta.words.map(x => x.word).join(" "));
        console.log('  %s', definition.glossary);
      });
    
    });

# License

GNU GPL 3.0 License

# 3rd-party License

[CFILT's WordNet License](http://www.cfilt.iitb.ac.in/wordnet/webhwn/)
