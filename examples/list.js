/**
 * WordNet lookup example
 *
 * @author Ajay Bhatt <ajaybhatt17@gmail.com>
 */

var wordnet = require('../lib/wordnet-hi.js');

wordnet.list(function(err, list) {

  console.log(list);

});
