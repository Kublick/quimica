const moment = require("moment");
const now = moment().format("YYYYMMDD");

function ZipcodeHelp() {
  let currentDate = parseInt(now) * 1000;
  let num = 1;
  currentDate = currentDate + num;
  console.log(currentDate);
  num++;
}
