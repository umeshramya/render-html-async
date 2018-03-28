
var fs = require("fs");
var queryString = require("querystring");

/*
================================
    getParsedQueryString method
================================

*/ 

var getParsedQueryString = function(url){
    // this creates json object from url with querystring
    var curURL = url;
    var queryStringIndex = curURL.indexOf("?");
    var qsString = curURL.substr(queryStringIndex + 1, curURL.length);
    return queryString.parse(qsString);
}

module.exports.getParsedQueryString  = getParsedQueryString 
/*
============================
    createQueryString method
============================

*/ 
var createQueryString = function(jsonOBJ={}){
    // this creates querystring from json object
    var keys = Object.keys(jsonOBJ);
    var queryString = "?";
    for (let index = 0; index < keys.length; index++) {
        if (queryString == "?"){
            queryString += keys[index] + "=" + jsonOBJ[keys[index]];

        }else{
            queryString += "&" + keys[index] + "=" + jsonOBJ[keys[index]];
        }
        
    }
    return queryString;
}

module.exports.createQueryString = createQueryString;

/*
==================================
    renderHTML method
==================================

*/ 

var readHTML = function(path, url){
    
    var promise = new Promise(function(resolve, reject){
        fs.readFile(path, null, function(err, data){
            if(err){
                reject("File coud not be read");
            }else{
                var parsedQuery = getParsedQueryString(url);// this get json object with latest parsed query string
                var keys = Object.keys(parsedQuery);// stores the keys of json object as array
                var patt; //this store the regular expression 
                var key ='';// single key from keys array
                var renderData = data.toString();// converts data recived form reading file to tostring and asign to renderData 
                for (let index = 0; index < keys.length; index++) {
                    // looping through keys array to replace {{args}} in renderData string
                    key = keys[index];
                    var regular = "{{" + key +  "}}";
                    var patt = new RegExp(regular, "g");// create regular expression
                    renderData = renderData.replace(patt, parsedQuery[key]);// pass it renderData to replace all by looping all keys 
                }
                
                renderData.indexOf(/{{get(w+)}}/)
                resolve(renderData);
            }
    
        });
    });

    return promise;

}

var renderHTML = function(path, url){
    return readHTML(path, url);

}

module.exports.renderHTML = renderHTML;

