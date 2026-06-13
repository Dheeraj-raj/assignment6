//build a simple web server using http module and pages like home, about, contact, services, products, and 404 page
const http = require('http'); 

const fs = require('fs'); //file system module to read html files

//connect hhtmp pages
const server = http.createServer((req, res) => {
    //send a response to the client
    if(req.url === '/' || req.url === '/home') {
        fs.readFile('home.html', (err, data) => {
            // console.log(err);
            // console.log(data);
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if(req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if(req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else if(req.url === '/style.css') {
        fs.readFile('style.css', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/css'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            }
        });
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});


const port = process.env.PORT || 4000; //port number
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
