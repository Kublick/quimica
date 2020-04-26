const mllp = require("./node_modules/mllp-node/index");
const fs = require('fs');
const parser = require("parsehl7");




// set time function for naming
const date = new Date();

  function getDateTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "_" + month + "_" + day + "_" + hour + "_" + min + "_" + sec;
  }

var server = new mllp.MLLPServer('10.10.1.7', 495);

// Subscribe to inbound messages
server.on('hl7', function (data){
  console.log('received payload:', data);

  console.log("SAVED TO : " + __dirname+"/output/" + "ID" + getDateTime() + ".txt");
 const path = __dirname + "/output/" + "ID" + getDateTime() + ".txt";
 const pathJSON = __dirname + "/output/" + "ID" + getDateTime() + ".json";
  // No escribir nada si viene vacio al inicio...
  if (data === 0) {}
      else {
    console.log("file writter");

     // write plain data file
        fs.writeFile(path, data, function (err) {

     // convert to JSON
          message = data;
          const segments = parser.parseMessageIntoSegments(message);
          console.log(segments);
          let stringed = JSON.stringify(segments, null, 2);

      //const mshFields = parser2.findSegmentByName(segments, 'MSH');

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
