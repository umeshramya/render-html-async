# render-html-async

![vesrion 0.0.5](https://img.shields.io/badge/version-1.0.0-green.svg)
![License MIT](https://img.shields.io/badge/License-MIT-yellowgreen.svg)



This is a template render engine. This is very light. This engine substitutes the query string parameters of url to inside the html page and renders it

## Usage

### HTML page
observe `{{key}}` symbol they contain keys of url querystring.
```html
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
Method renderHTML  takes two arguments and callback
1. `path`
`path` arguments is physical path in folder.
2. `url`

    a. This could be querystring `?name=Umesh&age=45&gender=male`

    b. This couild object i.e `{name : "umesh", age : 45, gender : "male"}`
     in above example name and gender are keys
     `{{key}}` is key of arguments these get replaced after rendering

3. `callback`

    This is call function with err as first argument and data as second argument( html string);


4. `partials` are also added. see below

```js
    var render = require("render-html-sync");//include in your module

    test.renderHTML(__dirname + "/index.html", url, function(err, data){
    if(err){
        throw Error(err);
    }else{
        console.log(data);
    }
    })
    
```
### method getParsedQueryString
This method returns json object from url with querystring 

```js
    var url = "./index?name=umesh&age=49";
    var queryJSON = render.getParsedQueryString(url);
```

### method createQueryString
This method creates queryString from json object

```js
    var jsonobj = {"name" : "Anthony", "age" : 35, "sex" : "nale"}
    var queryString = render.createQueryString(jsonOBJ);
```


## Partials
### First add Partials 
```js
    test.addPartials("header", __dirname + "/header.html");
    test.addPartials("footer", __dirname + "/footer.html");
```
create html partials(templates)
1. header Partial `{{get(header)}}`
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>

```
2. footer Partial `{{get(footer)}}`
```html
    </body>
    </html>
```
3. acutual page with conatin this code 
```html
{{get(header)}}
<h1>{{name}}</h1>
<h1>{{age}}</h1>
{{get(footer)}}
```

4. call render method
```js
    test.renderHTML(__dirname + "/index.html", url, function(err, data){
    if(err){
        throw Error(err);
    }else{
        console.log(data);
    }
    })

```
