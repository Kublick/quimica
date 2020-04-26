const mllp = require("./node_modules/mllp-node/index");
const fs = require('fs');
const parser = require("parsehl7");

// Setup time
const moment = require("moment");
var date = moment().format("YYYYMMDDhhmmss");

var server = new mllp.MLLPServer('10.10.1.7', 495);

// Subscribe to inbound messages
server.on('hl7', function (data){
  console.log('received payload:', data);

console.log("----------")
console.log("ID" + date);
console.log("---------");

 const path = __dirname + "/output/" + "ID" + date + ".txt";
 const pathJSON = __dirname + "/output/" + "ID" + date + ".json";

 // No escribir nada si viene vacio al inicio...
  if (data === 0) {}
      else {
     // write plain data file
        fs.writeFile(path, data, function (err) {
     // convert to JSON
          let message = data;
          const segments = parser.parseMessageIntoSegments(message);
      // Human readable JSON
          let stringed = JSON.stringify(segments, null, 2);
          fs.writeFile(pathJSON, stringed, (err) => {
          if (err) throw err;
          console.log('Data written to file');
        });
        if (err) {return console.log(err)}
      })
    }
});

  // Send outbound messages
server.send('127.0.0.1', 4321, 'outbound-hl7-message', function (err, ackData) {
  // async callback code here
});
