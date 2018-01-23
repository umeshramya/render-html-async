# render-html-async
This is a template render engine. This is very light. This engine substitutes the query string parameters inside the html page and renders it

## Usage

```
var render = require("./index");

    render.renderHTML("./index.html", "./index?name=umesh&age=49").then(function(data){
        console.log(data)
    }).catch(function(message){
        console.log(message);
    })
    
```

