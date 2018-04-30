
var fs = require("fs");
var queryString = require("querystring");

/*
================================
    getParsedQueryString method
================================

*/ 

var getParsedQueryString = function(url){
    // this creates json object from url with querystring
    if((typeof url) == 'string'){
        var curURL = url;
        var queryStringIndex = curURL.indexOf("?");
        var qsString = curURL.substr(queryStringIndex + 1, curURL.length);
        return queryString.parse(qsString);
    }else if((typeof url)== 'object'){
        return url;
    }else{
        return {};
    }
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
``
*/ 

var partials = {};
var Pattern = {
    proximal : '{{',
    distal  : '}}'
};
exports.setPattern = function(proximal='{{', distal = '}}'){
    Pattern.proximal=proximal;
    Pattern.distal = distal;
}

exports.addPartials = function(name, path){
    // this method adds the comonts javascripts objects 
    // to be at beginging of application
    // name :- name of the components to be used in  path is file path with file also
    var partial = fs.readFileSync(path);
    partials[name] = partial.toString();
}



var renderHTML = function(path, url, callback){
     fs.readFile(path, null, function(err, data){
        if (err){
            callback(err);
        }else{
            var renderData = data.toString();// converts data recived form reading file to tostring and asign to renderData 
            for (const key in partials) {
                let regular = `${Pattern.proximal}get\\(${key}\\)${Pattern.distal}`;
                let patt = new RegExp(regular, "g");// create regular expression
                renderData = renderData.replace(patt, partials[key]);// pass it renderData to replace all by looping all keys 
            }


            var parsedQuery = getParsedQueryString(url);// this get json object with latest parsed query string
            
            for (const key in parsedQuery) {
                let  regular = `${Pattern.proximal}${key}${Pattern.distal}`;
                let patt = new RegExp(regular, "g");// create regular expression
                renderData = renderData.replace(patt, parsedQuery[key]);// pass it renderData to replace all by looping all keys 
               
            }
            
            callback(null, renderData);
        }
    })


}


module.exports.renderHTML = renderHTML;

