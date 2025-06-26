const http = require('http');

// function listenServer(req, res) {
//   console.log(req);
// }
// http.createServer(listenServer);

//we can write the code as above but it's old
//so we write the code as below.

const server = http.createServer((req,res)=>{
  console.log(req);
})

const PORT = 4000;
server.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});

