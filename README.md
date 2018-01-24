# render-html-async

![vesrion 0.0.5](https://img.shields.io/badge/version-0.0.4-green.svg)
![License MIT](https://img.shields.io/badge/License-MIT-yellowgreen.svg)



This is a template render engine. This is very light. This engine substitutes the query string parameters of url to inside the html page and renders it

## Usage

### HTML page
observe `{{key}}` symbol they contain keys of url querystring.
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>

        <h1>{{name}}</h1>
        <h1>{{age}}</h1>


    </body>
    </html>
```

### method renderHTML
Method renderHTML  takes two arguments
1. path
2. url

`path` arguments is physical path in folder.
`url` is the one with arguments. For example url for the HTML page shown above is `"./index?name=umesh&age=49"` in this `name` and `age` are keys

`{{key}}` is key of arguments these get replaced after rendering see above
```
    var render = require("render-html-sync");//include in your module

    render.renderHTML("./index.html", "./index?name=umesh&age=49").then(function(data){
        //data varibale cotaines the render html as a string
        //write code to use in route  are any other purpose
        console.log(data);
        
    }).catch(function(message){
        //in case error cath block contains
        //use message var for sending error message like 404 or 500
        console.log(message);
    })
    
```
### method getParsedQueryString
This method returns json object from url with querystring 
```
    var url = ./index?name=umesh&age=49
    var queryJSON = render.getParsedQueryString(url);
```

### method createQueryString
This method creates queryString from json object

```
    var jsonobj = {"name" : "Anthony", "age" : 35, "sex" : "nale"}
    var queryString = render.createQueryString(jsonOBJ);
```
