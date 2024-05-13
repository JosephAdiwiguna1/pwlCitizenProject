var http= require('http');
var url = require('url');
var fileSys = require('fs');

var server = http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let path = q.query;
    let fileLocation;
    switch(path.menu){
        case'/':
            fileLocation = 'pages/home.html';
            break;
        case'home':
            fileLocation = 'pages/home.html';
            break;
        case'kartuKeluarga':
            fileLocation = 'pages/kartuKeluarga/indexKartu.html';
            break;
        case'penduduk':
            fileLocation = 'pages/penduduk/indexPenduduk.html';
            break;
        case'insertPenduduk':
            fileLocation = 'pages/penduduk/createPenduduk.html';
            break;
        case'editPenduduk':
            fileLocation = 'pages/penduduk/editPenduduk.html';
            break;  
        case'insertKartu':
            fileLocation = 'pages/kartuKeluarga/createKartu.html';
            break;
        case'editKartu':
            fileLocation = 'pages/kartuKeluarga/editKartu.html';
            break;   
        default:
            fileLocation = 'pages/home.html';
    }
    fileSys.readFile(fileLocation,(err,data)=> {
        if(err){
            res.writeHead(404,{'content-type' : 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
        return res.end();
    })
})
server.listen(8000);