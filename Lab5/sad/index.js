exports.handler = function(event, context, callback) {
    if(event.headers['User-Agent'] == "curl/7.64.0"){
        callback(null, {
        "statusCode": 200,
        "body": "Hello " +  event.queryStringParameters.name
        });
    }
    else{
        callback(null, {
        "statusCode": 200,
        "body": "Hello web!!"
        });
    }
}
