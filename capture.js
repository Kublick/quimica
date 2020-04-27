const mllp = require("./node_modules/mllp-node/index");
const fs = require('fs');
const parser = require("parsehl7");

const ip = require('ip');
const localIp =  ip.address();


// Setup server
const moment = require("moment");
const date = moment().format("YYYYMMDDhhmmss");


const server = new mllp.MLLPServer(localIp, 495);
console.log("server listening at: " + localIp);

// Subscribe to inbound messages
server.on('hl7', function (data){
  console.log('received payload:', data);

console.log("----------")
console.log("ID" + date);
console.log("---------");


 // No escribir nada si viene vacio al inicio...
  if (data === 0) {}
      else {
        let randomNumber = Math.floor(Math.random() * 1000);
        console.log(randomNumber);
        let path = __dirname + "/output/" + "ID" + date + "_" + randomNumber + ".txt";
        let pathJSON = __dirname + "/output/" + "ID" + date + "_" + randomNumber + ".json";

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
