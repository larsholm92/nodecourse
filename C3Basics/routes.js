
const requestHandler = (req,res) => {
    let url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Hello my friend!</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit" value="Submit">Add</button></form></body> </html>'
        )
         res.end();
    }

    if (url==='/users') {
        res.write('<html><ul>');
        for (let index = 1; index <= 10; index++) {
            res.write('<li>User ' + index + '</li>');
        }
        
        res.write('</ul></html>');
        return res.end();
    }
    
    if(url==='/create-user'){
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }
}


module.exports = requestHandler;