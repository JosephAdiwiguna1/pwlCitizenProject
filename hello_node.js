var http= require('http');
var url = require('url');
var browserUrl = 'http://it.maranatha.edu/main?userId=256&lang=en';

// var fileSys = require('fs');
// var server = http.createServer(function (re1,res){
//     fileSys.readFile('pages/index.html',function (err,data){
//         res.writeHead(200,{'content-type' : 'text/html'})
//         res.write(data);
//         return res.end();
//     })
// });

var server = http.createServer(function (re1,res){
    let browserDetail = url.parse(browserUrl);
    console.log(browserUrl);
    console.log(browserDetail.host);
    console.log(browserDetail.pathname);
    console.log(browserDetail.search);
    res.end();
});
server.listen(8000);