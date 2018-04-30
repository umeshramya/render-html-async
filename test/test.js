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
// let url= "?name=Umesh&age=45&sex=male"
let url ={
    name : "umesh",
    age : 45,
    sex : "Male"
}
console.log(typeof url)
test.addPartials("header", __dirname + "/header.html");
test.addPartials("footer", __dirname + "/footer.html");
var data = fs.readFileSync(__dirname + "/index.html").toString();

// test.renderHTML(__dirname + "/index.html", url).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log(err);
// })
test.renderHTML(__dirname + "/index.html", url, function(err, data){
    if(err){
        throw Error(err);
    }else{
        console.log(data);
    }
})
