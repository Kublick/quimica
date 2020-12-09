var http = require('http');
http
  .createServer(function (req, res) {
    console.log(res);

    function setNewData() {
      function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
      }

      let data = replaceAll(newData, 'GLUCOSA POINTE', 'GLUC');
      data = replaceAll(data, 'ACIDO URICO POINTE', 'URI');
      data = replaceAll(data, 'COLESTEROL POINTE', 'COL');
      data = replaceAll(data, 'TRIGLICERIDOS POINTE', 'TRIG');
      data = replaceAll(data, 'ALBUMINA POINTE', 'ALB');
      data = replaceAll(data, 'BILIRRUBINA TOTAL POINTE', 'BT');
      data = replaceAll(data, 'BILIRRUNINA DIRECTA POINTE', 'BD');
      data = replaceAll(data, 'CALCIO ARZENAZO POINTE', 'CAL');
      data = replaceAll(data, 'FOSFORO INORGANICO POINTE', 'PHOS');
      data = replaceAll(data, 'DESHIDROGINASA LACTICA POINTE', 'LD');
      data = replaceAll(data, 'GAMMA GLUTAMIL TRASFERASA POINTE', 'GGT');
      data = replaceAll(data, 'TGP POINTE', 'ALT');
      data = replaceAll(data, 'TGO POINTE', 'AST');
      data = replaceAll(data, 'FOSFATASA ALCALINA POINTE', 'ALK');
      data = replaceAll(data, 'BUN POINTE', 'BUN');
      data = replaceAll(data, 'CREATININA POINTE', 'CREA');
      data = replaceAll(data, 'MAGNESIO POINTE', 'MG');
      data = replaceAll(data, 'HDL FAST', 'HDL');
      data = replaceAll(data, 'LDL', 'LDL');
      data = replaceAll(data, 'REL A/G', 'R A/G');
      data = replaceAll(data, 'GLOB', 'GLOB');
      data = replaceAll(data, 'BI', 'BI');
      data = replaceAll(data, 'LT', 'LT');
      data = replaceAll(data, 'VLDL', 'VLDL');
      data = replaceAll(data, 'UREA', 'UREA');

      console.log('data dentro de la funcion');
      console.log(data);
    }

    setNewData();

    // const head = `MSH|^~&|Mindray|BS-200|||20200427140420||ORU^R01|79|P|2.3.1||||0||ASCII|||`;
    // newData = string.substring(61, string.length);
    // newData = head + string;

    // // URI = ACIDO URICO ?
    // // ALT LD PT AST ALK

    // console.log(data);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Connected');
    res.end();
  })
  .listen(3500);

let string = `MSH|^~\&|||||20200627143240||ORU^R01|9|P|2.3.1||||0||ASCII|||
PID|27|SM20060827||||||O|||||||||||||||||||||||
OBR|27|SM20060827|1|^|N|20200627082603|20200627082547|20200627082547||1^1||||20200627082547|Suero|||||||||||||||||||||||||||||||||
OBX|1|NM||GLUCOSA POINTE|79.755752|mg/dL|-|N|||F||79.755752|20200627091525|||0|
OBX|2|NM||ACIDO URICO POINTE|5.777725|mg/dL|-|N|||F||5.777725|20200627091507|||0|
OBX|3|NM||COLESTEROL POINTE|211.733023|mg/dL|-|N|||F||211.733023|20200627091525|||0|
OBX|4|NM||TRIGLICERIDOS POINTE|68.126082|mg/dL|-|N|||F||68.126082|20200627091543|||0|
OBX|5|NM||ALBUMINA POINTE|3.779392|g/dL|-|N|||F||3.779392|20200627091113|||0|
OBX|6|NM||BILIRRUBINA TOTAL POINTE|0.561039|mg/dL|-|N|||F||0.561039|20200627091601|||0|
OBX|7|NM||BILIRRUNINA DIRECTA POINTE|0.254148|mg/dL|-|N|||F||0.254148|20200627091619|||0|
OBX|8|NM||CALCIO ARZENAZO POINTE|10.854008|mg/dL|-|N|||F||10.854008|20200627091319|||0|
OBX|9|NM||FOSFORO INORGANICO POINTE|2.941504|mg/dL|-|N|||F||2.941504|20200627091337|||0|
OBX|10|NM||DESHIDROGINASA LACTICA POINTE|140.816212|U/L|-|N|||F||140.816212|20200627091601|||0|
OBX|11|NM||GAMMA GLUTAMIL TRASFERASA POINTE|21.776948|U/L|-|N|||F||21.776948|20200627091619|||0|
OBX|12|NM||TGP POINTE|13.496692|U/L|-|N|||F||13.496692|20200627091637|||0|
OBX|13|NM||TGO POINTE|16.011270|U/L|-|N|||F||16.011270|20200627091655|||0|
OBX|14|NM||FOSFATASA ALCALINA POINTE|113.803462|U/L|-|N|||F||113.803462|20200627091919|||0|
OBX|15|NM||BUN POINTE|22.642599|mg/dL|-|N|||F||22.642599|20200627091731|||0|
OBX|16|NM||PROTEINAS TOTALES POINTE|6.984028|g/dL|-|N|||F||6.984028|20200627091749|||0|
OBX|17|NM||CREATININA POINTE|1.211194|mg/dL|-|N|||F||1.211194|20200627091807|||0|
OBX|18|NM||MAGNESIO POINTE|2.148210|mg/dL|-|N|||F||2.148210|20200627092219|||0|
OBX|19|NM||HDL FAST|73.453194|mg/dL|-|N|||F||73.453194|20200627092631|||0|
OBX|20|NM||LDL|124.654000|mg/dL|-|N|||F||124.654000|||||
OBX|21|NM||REL A/G|1.181250|mg/dL|-|N|||F||1.181250|||||
OBX|22|NM||GLOB|3.200000|mg/dL|-|N|||F||3.200000|||||
OBX|23|NM||BI|0.310000|mg/dL|-|N|||F||0.310000|||||
OBX|24|NM||VLDL|13.626000|mg/dL|-|N|||F||13.626000|||||
OBX|25|NM||LT|353.310000|mg/dL|-|N|||F||353.310000|||||
OBX|26|NM||UREA|48.512992|mg/dL|-|N|||F||48.512992|||||`;
