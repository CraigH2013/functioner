'use strict';

var crypto = {
  caesar: function(x) {
    if (x < 0) {
      x = x + 26;
    }
    return function(string) {
      var output = '';

      Array.from(string).forEach(char => {
        if (char.match(/[a-z]/i)) {
          var code = char.charCodeAt(0);

          if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + x) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + x) % 26) + 97);
          }
        }

        output +=  char;
      });

      return output;
    };
  }
};

module.exports = crypto;
