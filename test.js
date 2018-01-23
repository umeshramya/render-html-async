var render = require("./index");

render.renderHTML("./index.html", "./index?name=umesh&age=49").then(function(data){
    console.log(data)
}).catch(function(message){
    console.log(message);
})


