const fs = require("fs");
const dataRead = fs.readFileSync("1-json.json");
const data = JSON.parse(dataRead.toString());
data.title = "Cuoc doi cua Huu Thanh";
data.author = "HuuThanh";
const dataToStringify = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataToStringify);
