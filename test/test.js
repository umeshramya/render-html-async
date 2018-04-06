// var data=`{{get(header)}}
// <form action="post" id="test">
//     <input type="text" name="txt" id="txt">
//     <input type="submit" value="Submit">
// </form>
// {{get(footer)}}`;

// var exp = /{{get\(\w+\)}}/

// console.log(data.fin(/{{get\(\w+\)}}/));

var test = require("../index");
var fs = require("fs");

test.addComponents("header", __dirname + "/header.html");
test.addComponents("footer", __dirname + "/footer.html");
var data = fs.readFileSync(__dirname + "/index.html").toString();

console.log(test.setComponents(data));
