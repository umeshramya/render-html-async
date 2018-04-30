let validateAndAdd = function(a,b, callback){
    let err = null;
    let data = null;
    if(a<0 || b<0){
        err = "invalid arguments"
        callback(err)
    }else{
        data = a + b;
        callback(null, data);
    }
}

validateAndAdd(3, 2, function(err, data){
    if(err){
        throw err;
    }else{
        console.log(data);
    }
    console.log("dhjhjh");
});

