const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<DOCTYPE html>
  <html>
      <head>
          <title>HTML units </title>
          <!-- <titel>hazarat budhha</titel> -->
          <style>
              header{
                  font-size:32px ;
              }
              .head
              {
                  color: blue;
                  border:brown solid 2px;
                  width:50vw;
                  font-size:32px ;
                  /* height:50vh; */
                  font-size: 2em;
                  height: 100vmax;
                
              }
  
          </style>
      </head>
      <body>
          <header>
              <h1 class="head">Payal Kosekar</h1>
          </header>
          <main>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quam. Ullam numquam facilis nulla eum autem natus sapiente neque, suscipit aliquid ipsum at repudiandae similique, mollitia fugiat cumque dignissimos officiis.</p>
          </main>
      </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});