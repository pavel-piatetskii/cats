const fs = require('fs');

// const showData = function(input) {
//   return(input)
// }

const breedDetailsFromFile = function(breed, callback) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    
    if (error) {
      callback("No breed with such name is found!");
    } else {
      callback(data)
    }
  });
};

module.exports = breedDetailsFromFile;